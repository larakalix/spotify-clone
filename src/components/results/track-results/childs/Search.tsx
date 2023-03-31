/* eslint-disable @next/next/no-img-element */

import { SearchResultDetails } from "@/components/search/SearchResultDetails";

type Props = {
    track: any;
    chooseTrack: (track: any) => void;
};

export const Search = ({ track, chooseTrack }: Props) => {
    const handlePlay = () => {
        chooseTrack(track);
    };

    const image =
        track.album.images.find((image: any) => image.width === 300) ||
        track.images[0];
    const artist = track.artists[0];

    return (
        <button
            className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors"
            onClick={handlePlay}
        >
            <SearchResultDetails
                imageUrl={image.url}
                name={track.name}
                artistName={artist.name}
            />
        </button>
    );
};
