import os
import logging
import re
import sys
from datetime import datetime
from flask import Flask
from sqlalchemy.orm import relationship, backref, sessionmaker, scoped_session, subqueryload_all, joinedload
from sqlalchemy import Column, Integer, String, Float, DateTime, Text, ForeignKey, create_engine, distinct
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import OperationalError
from sqlalchemy.pool import NullPool
from contextlib import contextmanager

app = Flask(__name__)
app.config.from_pyfile('../settings.cfg')
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'], poolclass=NullPool, connect_args={'check_same_thread':False})

Base = declarative_base()

Session = scoped_session(sessionmaker(bind=engine))

def coroutine(func):
    def wrapper(*arg, **kwargs):
        generator = func(*arg, **kwargs)
        next(generator)
        return generator
    return wrapper

@contextmanager
def session_scope():
    """Provide a transactional scope around a series of operations."""
    session = Session()
    try:
        yield session
        session.commit()
    except:
        session.rollback()
        raise
    finally:
        session.close()

class Artist(Base):
    __tablename__ = "artist"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(254), nullable=False, unique=True, index=True)
    albums = relationship("Album", backref="artist")
    
    def __init__(self, name):
        self.name = name
    
    def __repr__(self):
        return "<Artist %r>" % self.name
    
    def as_dict(self, albums=True):
        return {
            'id': self.id,
            'name': self.name,
            'albums': [x.as_dict() for x in self.albums] if (albums and 'albums' in self.__dict__) else None
        }

class Album(Base):
    __tablename__ = "album"
    
    id = Column(Integer, primary_key=True)
    artist_id = Column(Integer, ForeignKey("artist.id"), nullable=False)
    name = Column(String(254), nullable=False, index=True)
    year = Column(Integer, nullable=True)
    albumart = Column(String(254), nullable=True)
    tracks = relationship("Track", backref="album")
    
    def __repr__(self):
        return "<Album %r.%r>" % (self.artist_id, self.name)
    
    def as_dict(self, artist=True, tracks=True):
        return {
            'id': self.id,
            'artist_id': self.artist_id,
            'artist': self.artist.as_dict(albums=False) if (artist and 'artist' in self.__dict__) else None,
            'name': self.name,
            'year': self.year,
            'tracks': [x.as_dict() for x in self.tracks] if (tracks and 'tracks' in self.__dict__) else None
        }

class Genre(Base):
    __tablename__ = "genre"
    
    id = Column(Integer, primary_key=True)
    name = Column(String(254), nullable=False, unique=True)
    
    def __init__(self, name):
        self.name = name
    
    def __repr__(self):
        return "<Genre %r>" % self.name

class Track(Base):
    __tablename__ = "track"
    
    id = Column(Integer, primary_key=True)
    path = Column(Text(500), nullable=False)
    genre_id = Column(Integer, ForeignKey("genre.id"))
    album_id = Column(Integer, ForeignKey("album.id"))
    name = Column(String(254), nullable=False, index=True)
    duration = Column(Float, nullable=True)
    year = Column(Integer, nullable=True)
    bitrate = Column(String(10), nullable=True)
    trackno = Column(Integer, nullable=True)
    last_updated = Column(DateTime)
    
    def __init__(self, name, path, duration=0, year=0, bitrate='', trackno='', last_updated=''):
        self.name = name
        self.path = path
        self.duration = duration
        self.year = year
        self.bitrate = bitrate
        self.trackno = trackno
        self.last_updated = last_updated
    
    def set(self, name=None, path=None, trackno=None, year=None, duration=None, bitrate=None, last_updated=None):
        if name is not None:
            self.name = name
        if path is not None:
            self.path = path
        if duration is not None:
            self.duration = duration
        if year is not None:
            self.year = year
        if bitrate is not None:
            self.bitrate = bitrate
        if trackno is not None:
            self.trackno = trackno
        if last_updated is not None:
            self.last_updated = last_updated
        else:
            self.last_updated = datetime.now()
    
    def __repr__(self):
        return "<Track %r>" % self.path

def _clean_tag(tag, allow_none=False, mytype='string', default=None, max_len=254):
    if default is None and allow_none is False:
        if mytype == 'string':
            default = 'unknown'
        elif mytype == 'integer':
            default = 0
        elif mytype == 'float':
            default = 0.0
    if tag is None or tag == 'None':
        if allow_none is False:
            return default
        else:
            return None
    try:
        tag = str(tag).strip()
    except UnicodeDecodeError:
        tag = tag.strip()
    if tag == '':
        return default
    if mytype == 'integer' and re.match('\d{1,32}', tag) is None:
        return default
    if mytype == 'float':
        try:
            return float(tag)
        except ValueError:
            return default
    return tag[:max_len].strip()

class Context():
    
    def __init__(self, load=False):
        self.load = load
    
    def __enter__(self):
        self.session = Session()
        if self.load:
            self.tracks = {x.path: x.id for x in self.session.query(Track.path, Track.id).all()}
            self.artists = {x.name.strip().lower(): x for x in self.session.query(Artist).all()}
            self.genres = {x.name.strip().lower(): x for x in self.session.query(Genre).all()}
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is None:
            self.session.commit()
        else:
            self.session.rollback()
        self.session.close()
    
    def update_albumart(self, album, path):
        if path is not None:
            album.albumart = path
            self.session.commit()
    
    def delete_orphans(self):
        self.session.query(Genre).filter(~Genre.id.in_(self.session.query(distinct(Track.genre_id)))).delete(False)
        self.session.query(Album).filter(~Album.id.in_(self.session.query(distinct(Track.album_id)))).delete(False)
        self.session.query(Artist).filter(~Artist.id.in_(self.session.query(distinct(Album.artist_id)))).delete(False)
        self.session.commit()
    
    def delete_tracks(self, tracks):
        for track in tracks:
            self.session.delete(track)
        self.session.commit()
    
    def add_track_full(self, filepath, mtime, tags, info):
        track = self.add_track(
            filepath,
            tags['title'],
            tags['artist'],
            tags['genre'],
            tags['album'],
            tags['tracknumber'],
            tags['year'],
            info['length'],
            info['bitrate'],
            mtime
        )
        track.genre = self.fetch_genre(tags['genre'])
        track.album = self.fetch_album(tags['artist'], tags['album'], tags['year'])
        self.session.flush()
        return track
    
    def fetch_genre(self, genre):
        if genre is None:
            return None
        genreclean = genre.strip().lower()
        if genreclean in self.genres:
            ge = self.genres[genreclean]
        else:
            ge = Genre(name = genre)
            self.genres[genreclean] = genre
        return ge
    
    def get_albums_without_cover(self):
        return self.session.query(Album).filter(Album.albumart == None).all()
    
    def fetch_album(self, artist, album, year):
        artistclean = artist.strip().lower()
        if artistclean in self.artists:
            ar = self.artists[artistclean]
        else:
            ar = Artist(name = artist)
            self.artists[artistclean] = ar
            self.session.add(ar)
        self.session.enable_relationship_loading(ar)
        albums = {a.name: a for a in ar.albums}
        if album in albums:
            return albums[album]
        else:
            al = Album(name = album, artist = ar, year = year)
            self.session.add(al)
            return al
    
    def add_track(self, path, name, artist, genre, album, trackno=None, year=None, duration=0.0, bitrate=None, last_mod_time=None, albumart=None):
        name = _clean_tag(name)
        artist = _clean_tag(artist)
        genre = _clean_tag(genre)
        album = _clean_tag(album)
        duration = _clean_tag(duration, mytype='float')
        year = _clean_tag(year, mytype='integer', max_len=4)
        bitrate = _clean_tag(bitrate, allow_none=True)
        if trackno is not None:
            trackno = trackno.split("/")[0]
        trackno = _clean_tag(trackno, mytype='integer')
        
        if path in self.tracks:
            track = self.session.query(Track).filter(Track.path == path).one()
            track.set(name, path, trackno, year, duration, bitrate, last_mod_time)
            self.session.merge(track)
        else:
            track = Track(name, path, trackno, year, duration, bitrate, last_mod_time)
            self.session.add(track)
        
        return track

Base.metadata.create_all(bind=engine)