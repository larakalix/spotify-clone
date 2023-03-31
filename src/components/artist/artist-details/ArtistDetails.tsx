/* eslint-disable @next/next/no-img-element */
import { Artists } from "@/interfaces/search";
import { ArtistAlbums, ArtistRelatedArtists, ArtistTopTracks } from "./childs";

type Props = {
    artist: Artists;
    chooseTrack: (trackId: string) => void;
};

export const ArtistDetails = ({ artist, chooseTrack }: Props) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8 w-full">
                <ArtistTopTracks
                    topTracks={artist.topTracks}
                    chooseTrack={chooseTrack}
                />
                <ArtistAlbums albums={artist.albums} />
                <ArtistRelatedArtists relatedArtists={artist.relatedArtists} />
            </div>
        </div>
    );
};
