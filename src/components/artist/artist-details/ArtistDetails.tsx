/* eslint-disable @next/next/no-img-element */
import { Artists } from "@/interfaces/search";
import { ArtistAlbums, ArtistTopTracks } from "./childs";

type Props = {
    artist: Artists;
};

export const ArtistDetails = ({ artist }: Props) => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-center gap-8 w-full">
                <ArtistTopTracks topTracks={artist.topTracks} />
                <ArtistAlbums albums={artist.albums} />
            </div>
        </div>
    );
};
