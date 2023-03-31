export type SearchResult = {
    albums: Albums;
    artists: Artists;
    tracks: Tracks;
    playlists: Playlists;
    shows: Shows;
    episodes: Episodes;
};

export type Albums = {
    href: string;
    items: AlbumElement[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    name: string;
    images: Image[];
    artists: Owner[];
};

export type AlbumElement = {
    albumGroup: AlbumGroup;
    albumType: AlbumGroup;
    artists: Owner[];
    availableMarkets: string[];
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    isPlayable: boolean;
    name: string;
    releaseDate: string;
    releaseDatePrecision: ReleaseDatePrecision;
    totalTracks: number;
    type: AlbumGroup;
    uri: string;
};

export enum AlbumGroup {
    Album = "album",
    Compilation = "compilation",
    Single = "single",
}

export type Owner = {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    name?: string;
    type: OwnerType;
    uri: string;
    displayName?: DisplayName;
};

export enum DisplayName {
    Cj = "cj",
    Nathan2022001 = "nathan2022001",
    SetlistGuySetlistGuy = "Setlist Guy @SetlistGuy",
    Spotify = "Spotify",
}

export type ExternalUrls = {
    spotify: string;
};

export enum OwnerType {
    Artist = "artist",
    User = "user",
}

export type Image = {
    height: number | null;
    url: string;
    width: number | null;
};

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export type Artists = {
    id: string;
    href: string;
    items: ArtistsItem[];
    images: Image[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    name: string;
    followers: Followers;
    topTracks: Tracks[];
    albums: Albums[];
};

export type ArtistsItem = {
    externalUrls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: OwnerType;
    uri: string;
};

export type Followers = {
    href: null | string;
    total: number;
};

export type Episodes = {
    href: string;
    items: EpisodesItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
};

export type EpisodesItem = {
    audioPreviewUrl: string;
    description: string;
    durationMs: number;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    htmlDescription: string;
    id: string;
    images: Image[];
    isExternallyHosted: boolean;
    isPlayable: boolean;
    language: Language;
    languages: Language[];
    name: string;
    releaseDate: Date;
    releaseDatePrecision: ReleaseDatePrecision;
    type: PurpleType;
    uri: string;
};

export enum Language {
    En = "en",
    EnUs = "en-US",
}

export enum PurpleType {
    Episode = "episode",
}

export type Playlists = {
    href: string;
    items: PlaylistsItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
};

export type PlaylistsItem = {
    collaborative: boolean;
    description: string;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primaryColor: null;
    public: null;
    snapshotId: string;
    tracks: Followers;
    type: FluffyType;
    uri: string;
};

export enum FluffyType {
    Playlist = "playlist",
}

export type Shows = {
    href: string;
    items: ShowsItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
};

export type ShowsItem = {
    availableMarkets: string[];
    copyrights: any[];
    description: string;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    htmlDescription: string;
    id: string;
    images: Image[];
    isExternallyHosted: boolean;
    languages: string[];
    mediaType: MediaType;
    name: string;
    publisher: string;
    totalEpisodes: number;
    type: TentacledType;
    uri: string;
};

export enum MediaType {
    Audio = "audio",
    Mixed = "mixed",
}

export enum TentacledType {
    Show = "show",
}

export type Tracks = {
    href: string;
    items: TracksItem[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    name: string;
    images: Image[];
    artists: Owner[];
    album: AlbumElement;
};

export type TracksItem = {
    album: AlbumElement;
    artists: Owner[];
    availableMarkets: string[];
    discNumber: number;
    durationMs: number;
    explicit: boolean;
    externalIds: ExternalIds;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    isLocal: boolean;
    name: string;
    popularity: number;
    previewUrl: string;
    trackNumber: number;
    type: StickyType;
    uri: string;
};

export type ExternalIds = {
    isrc: string;
};

export enum StickyType {
    Track = "track",
}
