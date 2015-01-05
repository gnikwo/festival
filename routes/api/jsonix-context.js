var api = {
    name: 'api',
    typeInfos: [{
        type: 'classInfo',
        localName: 'Response',
        propertyInfos: [{
            type: 'element',
            name: 'musicFolders',
            elementName: 'musicFolders',
            typeInfo: 'api.MusicFolders'
        }, {
            type: 'element',
            name: 'indexes',
            elementName: 'indexes',
            typeInfo: 'api.Indexes'
        }, {
            type: 'element',
            name: 'directory',
            elementName: 'directory',
            typeInfo: 'api.Directory'
        }, {
            type: 'element',
            name: 'genres',
            elementName: 'genres',
            typeInfo: 'api.Genres'
        }, {
            type: 'element',
            name: 'artists',
            elementName: 'artists',
            typeInfo: 'api.ArtistsID3'
        }, {
            type: 'element',
            name: 'artist',
            elementName: 'artist',
            typeInfo: 'api.ArtistWithAlbumsID3'
        }, {
            type: 'element',
            name: 'album',
            elementName: 'album',
            typeInfo: 'api.AlbumWithSongsID3'
        }, {
            type: 'element',
            name: 'song',
            elementName: 'song',
            typeInfo: 'api.Child'
        }, {
            type: 'element',
            name: 'videos',
            elementName: 'videos',
            typeInfo: 'api.Videos'
        }, {
            type: 'element',
            name: 'nowPlaying',
            elementName: 'nowPlaying',
            typeInfo: 'api.NowPlaying'
        }, {
            type: 'element',
            name: 'searchResult',
            elementName: 'searchResult',
            typeInfo: 'api.SearchResult'
        }, {
            type: 'element',
            name: 'searchResult2',
            elementName: 'searchResult2',
            typeInfo: 'api.SearchResult2'
        }, {
            type: 'element',
            name: 'searchResult3',
            elementName: 'searchResult3',
            typeInfo: 'api.SearchResult3'
        }, {
            type: 'element',
            name: 'playlists',
            elementName: 'playlists',
            typeInfo: 'api.Playlists'
        }, {
            type: 'element',
            name: 'playlist',
            elementName: 'playlist',
            typeInfo: 'api.PlaylistWithSongs'
        }, {
            type: 'element',
            name: 'jukeboxStatus',
            elementName: 'jukeboxStatus',
            typeInfo: 'api.JukeboxStatus'
        }, {
            type: 'element',
            name: 'jukeboxPlaylist',
            elementName: 'jukeboxPlaylist',
            typeInfo: 'api.JukeboxPlaylist'
        }, {
            type: 'element',
            name: 'license',
            elementName: 'license',
            typeInfo: 'api.License'
        }, {
            type: 'element',
            name: 'users',
            elementName: 'users',
            typeInfo: 'api.Users'
        }, {
            type: 'element',
            name: 'user',
            elementName: 'user',
            typeInfo: 'api.User'
        }, {
            type: 'element',
            name: 'chatMessages',
            elementName: 'chatMessages',
            typeInfo: 'api.ChatMessages'
        }, {
            type: 'element',
            name: 'albumList',
            elementName: 'albumList',
            typeInfo: 'api.AlbumList'
        }, {
            type: 'element',
            name: 'albumList2',
            elementName: 'albumList2',
            typeInfo: 'api.AlbumList2'
        }, {
            type: 'element',
            name: 'randomSongs',
            elementName: 'randomSongs',
            typeInfo: 'api.Songs'
        }, {
            type: 'element',
            name: 'songsByGenre',
            elementName: 'songsByGenre',
            typeInfo: 'api.Songs'
        }, {
            type: 'element',
            name: 'lyrics',
            elementName: 'lyrics',
            typeInfo: 'api.Lyrics'
        }, {
            type: 'element',
            name: 'podcasts',
            elementName: 'podcasts',
            typeInfo: 'api.Podcasts'
        }, {
            type: 'element',
            name: 'internetRadioStations',
            elementName: 'internetRadioStations',
            typeInfo: 'api.InternetRadioStations'
        }, {
            type: 'element',
            name: 'bookmarks',
            elementName: 'bookmarks',
            typeInfo: 'api.Bookmarks'
        }, {
            type: 'element',
            name: 'shares',
            elementName: 'shares',
            typeInfo: 'api.Shares'
        }, {
            type: 'element',
            name: 'starred',
            elementName: 'starred',
            typeInfo: 'api.Starred'
        }, {
            type: 'element',
            name: 'starred2',
            elementName: 'starred2',
            typeInfo: 'api.Starred2'
        }, {
            type: 'element',
            name: 'error',
            elementName: 'error',
            typeInfo: 'api.Error'
        }, {
            name: 'status',
            typeInfo: 'String',
            attributeName: 'status',
            type: 'attribute'
        }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'User',
        propertyInfos: [{
            name: 'username',
            typeInfo: 'String',
            attributeName: 'username',
            type: 'attribute'
        }, {
            name: 'email',
            typeInfo: 'String',
            attributeName: 'email',
            type: 'attribute'
        }, {
            name: 'scrobblingEnabled',
            typeInfo: 'Boolean',
            attributeName: 'scrobblingEnabled',
            type: 'attribute'
        }, {
            name: 'adminRole',
            typeInfo: 'Boolean',
            attributeName: 'adminRole',
            type: 'attribute'
        }, {
            name: 'settingsRole',
            typeInfo: 'Boolean',
            attributeName: 'settingsRole',
            type: 'attribute'
        }, {
            name: 'downloadRole',
            typeInfo: 'Boolean',
            attributeName: 'downloadRole',
            type: 'attribute'
        }, {
            name: 'uploadRole',
            typeInfo: 'Boolean',
            attributeName: 'uploadRole',
            type: 'attribute'
        }, {
            name: 'playlistRole',
            typeInfo: 'Boolean',
            attributeName: 'playlistRole',
            type: 'attribute'
        }, {
            name: 'coverArtRole',
            typeInfo: 'Boolean',
            attributeName: 'coverArtRole',
            type: 'attribute'
        }, {
            name: 'commentRole',
            typeInfo: 'Boolean',
            attributeName: 'commentRole',
            type: 'attribute'
        }, {
            name: 'podcastRole',
            typeInfo: 'Boolean',
            attributeName: 'podcastRole',
            type: 'attribute'
        }, {
            name: 'streamRole',
            typeInfo: 'Boolean',
            attributeName: 'streamRole',
            type: 'attribute'
        }, {
            name: 'jukeboxRole',
            typeInfo: 'Boolean',
            attributeName: 'jukeboxRole',
            type: 'attribute'
        }, {
            name: 'shareRole',
            typeInfo: 'Boolean',
            attributeName: 'shareRole',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'AlbumWithSongsID3',
        baseTypeInfo: 'api.AlbumID3',
        propertyInfos: [{
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'Users',
        propertyInfos: [{
            type: 'element',
            name: 'user',
            collection: true,
            elementName: 'user',
            typeInfo: 'api.User'
        }]
    }, {
        type: 'classInfo',
        localName: 'Child',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'parent',
            typeInfo: 'String',
            attributeName: 'parent',
            type: 'attribute'
        }, {
            name: 'isDir',
            typeInfo: 'Boolean',
            attributeName: 'isDir',
            type: 'attribute'
        }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
        }, {
            name: 'album',
            typeInfo: 'String',
            attributeName: 'album',
            type: 'attribute'
        }, {
            name: 'artist',
            typeInfo: 'String',
            attributeName: 'artist',
            type: 'attribute'
        }, {
            name: 'track',
            typeInfo: 'Int',
            attributeName: 'track',
            type: 'attribute'
        }, {
            name: 'year',
            typeInfo: 'Int',
            attributeName: 'year',
            type: 'attribute'
        }, {
            name: 'genre',
            typeInfo: 'String',
            attributeName: 'genre',
            type: 'attribute'
        }, {
            name: 'coverArt',
            typeInfo: 'String',
            attributeName: 'coverArt',
            type: 'attribute'
        }, {
            name: 'size',
            typeInfo: 'Long',
            attributeName: 'size',
            type: 'attribute'
        }, {
            name: 'contentType',
            typeInfo: 'String',
            attributeName: 'contentType',
            type: 'attribute'
        }, {
            name: 'suffix',
            typeInfo: 'String',
            attributeName: 'suffix',
            type: 'attribute'
        }, {
            name: 'transcodedContentType',
            typeInfo: 'String',
            attributeName: 'transcodedContentType',
            type: 'attribute'
        }, {
            name: 'transcodedSuffix',
            typeInfo: 'String',
            attributeName: 'transcodedSuffix',
            type: 'attribute'
        }, {
            name: 'duration',
            typeInfo: 'Int',
            attributeName: 'duration',
            type: 'attribute'
        }, {
            name: 'bitRate',
            typeInfo: 'Int',
            attributeName: 'bitRate',
            type: 'attribute'
        }, {
            name: 'path',
            typeInfo: 'String',
            attributeName: 'path',
            type: 'attribute'
        }, {
            name: 'isVideo',
            typeInfo: 'Boolean',
            attributeName: 'isVideo',
            type: 'attribute'
        }, {
            name: 'userRating',
            typeInfo: 'Int',
            attributeName: 'userRating',
            type: 'attribute'
        }, {
            name: 'averageRating',
            typeInfo: 'Double',
            attributeName: 'averageRating',
            type: 'attribute'
        }, {
            name: 'discNumber',
            typeInfo: 'Int',
            attributeName: 'discNumber',
            type: 'attribute'
        }, {
            name: 'created',
            typeInfo: 'Calendar',
            attributeName: 'created',
            type: 'attribute'
        }, {
            name: 'starred',
            typeInfo: 'Calendar',
            attributeName: 'starred',
            type: 'attribute'
        }, {
            name: 'albumId',
            typeInfo: 'String',
            attributeName: 'albumId',
            type: 'attribute'
        }, {
            name: 'artistId',
            typeInfo: 'String',
            attributeName: 'artistId',
            type: 'attribute'
        }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
        }, {
            name: 'bookmarkPosition',
            typeInfo: 'Long',
            attributeName: 'bookmarkPosition',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'AlbumList2',
        propertyInfos: [{
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.AlbumID3'
        }]
    }, {
        type: 'classInfo',
        localName: 'InternetRadioStation',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'streamUrl',
            typeInfo: 'String',
            attributeName: 'streamUrl',
            type: 'attribute'
        }, {
            name: 'homePageUrl',
            typeInfo: 'String',
            attributeName: 'homePageUrl',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Starred2',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.ArtistID3'
        }, {
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.AlbumID3'
        }, {
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'Podcasts',
        propertyInfos: [{
            type: 'element',
            name: 'channel',
            collection: true,
            elementName: 'channel',
            typeInfo: 'api.PodcastChannel'
        }]
    }, {
        type: 'classInfo',
        localName: 'InternetRadioStations',
        propertyInfos: [{
            type: 'element',
            name: 'internetRadioStation',
            collection: true,
            elementName: 'internetRadioStation',
            typeInfo: 'api.InternetRadioStation'
        }]
    }, {
        type: 'classInfo',
        localName: 'Videos',
        propertyInfos: [{
            type: 'element',
            name: 'video',
            collection: true,
            elementName: 'video',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'SearchResult',
        propertyInfos: [{
            type: 'element',
            name: 'match',
            collection: true,
            elementName: 'match',
            typeInfo: 'api.Child'
        }, {
            name: 'offset',
            typeInfo: 'Int',
            attributeName: 'offset',
            type: 'attribute'
        }, {
            name: 'totalHits',
            typeInfo: 'Int',
            attributeName: 'totalHits',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'ArtistWithAlbumsID3',
        baseTypeInfo: 'api.ArtistID3',
        propertyInfos: [{
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.AlbumID3'
        }]
    }, {
        type: 'classInfo',
        localName: 'Genre',
        propertyInfos: [{
            name: 'content',
            typeInfo: 'String',
            type: 'value'
        }, {
            name: 'songCount',
            typeInfo: 'Int',
            attributeName: 'songCount',
            type: 'attribute'
        }, {
            name: 'albumCount',
            typeInfo: 'Int',
            attributeName: 'albumCount',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Lyrics',
        propertyInfos: [{
            name: 'content',
            typeInfo: 'String',
            type: 'value'
        }, {
            name: 'artist',
            typeInfo: 'String',
            attributeName: 'artist',
            type: 'attribute'
        }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'ChatMessages',
        propertyInfos: [{
            type: 'element',
            name: 'chatMessage',
            collection: true,
            elementName: 'chatMessage',
            typeInfo: 'api.ChatMessage'
        }]
    }, {
        type: 'classInfo',
        localName: 'NowPlayingEntry',
        baseTypeInfo: 'api.Child',
        propertyInfos: [{
            name: 'username',
            typeInfo: 'String',
            attributeName: 'username',
            type: 'attribute'
        }, {
            name: 'minutesAgo',
            typeInfo: 'Int',
            attributeName: 'minutesAgo',
            type: 'attribute'
        }, {
            name: 'playerId',
            typeInfo: 'Int',
            attributeName: 'playerId',
            type: 'attribute'
        }, {
            name: 'playerName',
            typeInfo: 'String',
            attributeName: 'playerName',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'SearchResult2',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.Artist'
        }, {
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.Child'
        }, {
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'MusicFolder',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'Int',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'SearchResult3',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.ArtistID3'
        }, {
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.AlbumID3'
        }, {
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'AlbumID3',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'artist',
            typeInfo: 'String',
            attributeName: 'artist',
            type: 'attribute'
        }, {
            name: 'artistId',
            typeInfo: 'String',
            attributeName: 'artistId',
            type: 'attribute'
        }, {
            name: 'coverArt',
            typeInfo: 'String',
            attributeName: 'coverArt',
            type: 'attribute'
        }, {
            name: 'songCount',
            typeInfo: 'Int',
            attributeName: 'songCount',
            type: 'attribute'
        }, {
            name: 'duration',
            typeInfo: 'Int',
            attributeName: 'duration',
            type: 'attribute'
        }, {
            name: 'created',
            typeInfo: 'Calendar',
            attributeName: 'created',
            type: 'attribute'
        }, {
            name: 'starred',
            typeInfo: 'Calendar',
            attributeName: 'starred',
            type: 'attribute'
        }, {
            name: 'year',
            typeInfo: 'Int',
            attributeName: 'year',
            type: 'attribute'
        }, {
            name: 'genre',
            typeInfo: 'String',
            attributeName: 'genre',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Indexes',
        propertyInfos: [{
            type: 'element',
            name: 'shortcut',
            collection: true,
            elementName: 'shortcut',
            typeInfo: 'api.Artist'
        }, {
            type: 'element',
            name: 'index',
            collection: true,
            elementName: 'index',
            typeInfo: 'api.Index'
        }, {
            type: 'element',
            name: 'child',
            collection: true,
            elementName: 'child',
            typeInfo: 'api.Child'
        }, {
            name: 'lastModified',
            typeInfo: 'Long',
            attributeName: 'lastModified',
            type: 'attribute'
        }, {
            name: 'ignoredArticles',
            typeInfo: 'String',
            attributeName: 'ignoredArticles',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Index',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.Artist'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Songs',
        propertyInfos: [{
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'Playlist',
        propertyInfos: [{
            type: 'element',
            name: 'allowedUser',
            collection: true,
            elementName: 'allowedUser',
            typeInfo: 'String'
        }, {
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'comment',
            typeInfo: 'String',
            attributeName: 'comment',
            type: 'attribute'
        }, {
            name: 'owner',
            typeInfo: 'String',
            attributeName: 'owner',
            type: 'attribute'
        }, {
            name: '_public',
            typeInfo: 'Boolean',
            attributeName: 'public',
            type: 'attribute'
        }, {
            name: 'songCount',
            typeInfo: 'Int',
            attributeName: 'songCount',
            type: 'attribute'
        }, {
            name: 'duration',
            typeInfo: 'Int',
            attributeName: 'duration',
            type: 'attribute'
        }, {
            name: 'created',
            typeInfo: 'Calendar',
            attributeName: 'created',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'PodcastChannel',
        propertyInfos: [{
            type: 'element',
            name: 'episode',
            collection: true,
            elementName: 'episode',
            typeInfo: 'api.PodcastEpisode'
        }, {
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'url',
            typeInfo: 'String',
            attributeName: 'url',
            type: 'attribute'
        }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
        }, {
            name: 'description',
            typeInfo: 'String',
            attributeName: 'description',
            type: 'attribute'
        }, {
            name: 'status',
            typeInfo: 'String',
            attributeName: 'status',
            type: 'attribute'
        }, {
            name: 'errorMessage',
            typeInfo: 'String',
            attributeName: 'errorMessage',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'ArtistID3',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'coverArt',
            typeInfo: 'String',
            attributeName: 'coverArt',
            type: 'attribute'
        }, {
            name: 'albumCount',
            typeInfo: 'Int',
            attributeName: 'albumCount',
            type: 'attribute'
        }, {
            name: 'starred',
            typeInfo: 'Calendar',
            attributeName: 'starred',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'MusicFolders',
        propertyInfos: [{
            type: 'element',
            name: 'musicFolder',
            collection: true,
            elementName: 'musicFolder',
            typeInfo: 'api.MusicFolder'
        }]
    }, {
        type: 'classInfo',
        localName: 'Bookmark',
        propertyInfos: [{
            type: 'element',
            name: 'entry',
            elementName: 'entry',
            typeInfo: 'api.Child'
        }, {
            name: 'position',
            typeInfo: 'Long',
            attributeName: 'position',
            type: 'attribute'
        }, {
            name: 'username',
            typeInfo: 'String',
            attributeName: 'username',
            type: 'attribute'
        }, {
            name: 'comment',
            typeInfo: 'String',
            attributeName: 'comment',
            type: 'attribute'
        }, {
            name: 'created',
            typeInfo: 'Calendar',
            attributeName: 'created',
            type: 'attribute'
        }, {
            name: 'changed',
            typeInfo: 'Calendar',
            attributeName: 'changed',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'ArtistsID3',
        propertyInfos: [{
            type: 'element',
            name: 'index',
            collection: true,
            elementName: 'index',
            typeInfo: 'api.IndexID3'
        }, {
            name: 'ignoredArticles',
            typeInfo: 'String',
            attributeName: 'ignoredArticles',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'IndexID3',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.ArtistID3'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'PlaylistWithSongs',
        baseTypeInfo: 'api.Playlist',
        propertyInfos: [{
            type: 'element',
            name: 'entry',
            collection: true,
            elementName: 'entry',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'Share',
        propertyInfos: [{
            type: 'element',
            name: 'entry',
            collection: true,
            elementName: 'entry',
            typeInfo: 'api.Child'
        }, {
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'url',
            typeInfo: 'String',
            attributeName: 'url',
            type: 'attribute'
        }, {
            name: 'description',
            typeInfo: 'String',
            attributeName: 'description',
            type: 'attribute'
        }, {
            name: 'username',
            typeInfo: 'String',
            attributeName: 'username',
            type: 'attribute'
        }, {
            name: 'created',
            typeInfo: 'Calendar',
            attributeName: 'created',
            type: 'attribute'
        }, {
            name: 'expires',
            typeInfo: 'Calendar',
            attributeName: 'expires',
            type: 'attribute'
        }, {
            name: 'lastVisited',
            typeInfo: 'Calendar',
            attributeName: 'lastVisited',
            type: 'attribute'
        }, {
            name: 'visitCount',
            typeInfo: 'Int',
            attributeName: 'visitCount',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Bookmarks',
        propertyInfos: [{
            type: 'element',
            name: 'bookmark',
            collection: true,
            elementName: 'bookmark',
            typeInfo: 'api.Bookmark'
        }]
    }, {
        type: 'classInfo',
        localName: 'ChatMessage',
        propertyInfos: [{
            name: 'username',
            typeInfo: 'String',
            attributeName: 'username',
            type: 'attribute'
        }, {
            name: 'time',
            typeInfo: 'Long',
            attributeName: 'time',
            type: 'attribute'
        }, {
            name: 'message',
            typeInfo: 'String',
            attributeName: 'message',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Artist',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'starred',
            typeInfo: 'Calendar',
            attributeName: 'starred',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Starred',
        propertyInfos: [{
            type: 'element',
            name: 'artist',
            collection: true,
            elementName: 'artist',
            typeInfo: 'api.Artist'
        }, {
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.Child'
        }, {
            type: 'element',
            name: 'song',
            collection: true,
            elementName: 'song',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'AlbumList',
        propertyInfos: [{
            type: 'element',
            name: 'album',
            collection: true,
            elementName: 'album',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'PodcastEpisode',
        baseTypeInfo: 'api.Child',
        propertyInfos: [{
            name: 'streamId',
            typeInfo: 'String',
            attributeName: 'streamId',
            type: 'attribute'
        }, {
            name: 'description',
            typeInfo: 'String',
            attributeName: 'description',
            type: 'attribute'
        }, {
            name: 'status',
            typeInfo: 'String',
            attributeName: 'status',
            type: 'attribute'
        }, {
            name: 'publishDate',
            typeInfo: 'Calendar',
            attributeName: 'publishDate',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Error',
        propertyInfos: [{
            name: 'code',
            typeInfo: 'Int',
            attributeName: 'code',
            type: 'attribute'
        }, {
            name: 'message',
            typeInfo: 'String',
            attributeName: 'message',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'JukeboxStatus',
        propertyInfos: [{
            name: 'currentIndex',
            typeInfo: 'Int',
            attributeName: 'currentIndex',
            type: 'attribute'
        }, {
            name: 'playing',
            typeInfo: 'Boolean',
            attributeName: 'playing',
            type: 'attribute'
        }, {
            name: 'gain',
            typeInfo: 'Float',
            attributeName: 'gain',
            type: 'attribute'
        }, {
            name: 'position',
            typeInfo: 'Int',
            attributeName: 'position',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'License',
        propertyInfos: [{
            name: 'valid',
            typeInfo: 'Boolean',
            attributeName: 'valid',
            type: 'attribute'
        }, {
            name: 'email',
            typeInfo: 'String',
            attributeName: 'email',
            type: 'attribute'
        }, {
            name: 'key',
            typeInfo: 'String',
            attributeName: 'key',
            type: 'attribute'
        }, {
            name: 'date',
            typeInfo: 'Calendar',
            attributeName: 'date',
            type: 'attribute'
        }]
    }, {
        type: 'classInfo',
        localName: 'Shares',
        propertyInfos: [{
            type: 'element',
            name: 'share',
            collection: true,
            elementName: 'share',
            typeInfo: 'api.Share'
        }]
    }, {
        type: 'classInfo',
        localName: 'NowPlaying',
        propertyInfos: [{
            type: 'element',
            name: 'entry',
            collection: true,
            elementName: 'entry',
            typeInfo: 'api.NowPlayingEntry'
        }]
    }, {
        type: 'classInfo',
        localName: 'Playlists',
        propertyInfos: [{
            type: 'element',
            name: 'playlist',
            collection: true,
            elementName: 'playlist',
            typeInfo: 'api.Playlist'
        }]
    }, {
        type: 'classInfo',
        localName: 'Genres',
        propertyInfos: [{
            type: 'element',
            name: 'genre',
            collection: true,
            elementName: 'genre',
            typeInfo: 'api.Genre'
        }]
    }, {
        type: 'classInfo',
        localName: 'JukeboxPlaylist',
        baseTypeInfo: 'api.JukeboxStatus',
        propertyInfos: [{
            type: 'element',
            name: 'entry',
            collection: true,
            elementName: 'entry',
            typeInfo: 'api.Child'
        }]
    }, {
        type: 'classInfo',
        localName: 'Directory',
        propertyInfos: [{
            type: 'element',
            name: 'child',
            collection: true,
            elementName: 'child',
            typeInfo: 'api.Child'
        }, {
            name: 'id',
            typeInfo: 'String',
            attributeName: 'id',
            type: 'attribute'
        }, {
            name: 'parent',
            typeInfo: 'String',
            attributeName: 'parent',
            type: 'attribute'
        }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
        }, {
            name: 'starred',
            typeInfo: 'Calendar',
            attributeName: 'starred',
            type: 'attribute'
        }]
    }],
    elementInfos: [{
        elementName: 'subsonic-response',
        typeInfo: 'api.Response'
    }]
};

module.exports = api;