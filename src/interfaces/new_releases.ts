export type NewReleases = {
    albumGroup: AlbumGroup;
    albumType: AlbumGroup;
    artists: Artist[];
    availableMarkets: string[];
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    releaseDate: Date;
    releaseDatePrecision: ReleaseDatePrecision;
    totalTracks: number;
    type: AlbumGroup;
    uri: string;
};

export enum AlbumGroup {
    Album = "album",
    Single = "single",
}

export type Artist = {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: Type;
    uri: string;
};

export type ExternalUrls = {
    spotify: string;
};

export enum Type {
    Artist = "artist",
}

export type Image = {
    height: number;
    url: string;
    width: number;
};

export enum ReleaseDatePrecision {
    Day = "day",
}
