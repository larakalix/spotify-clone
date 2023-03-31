/* eslint-disable @next/next/no-img-element */

import { Tracks } from "@/interfaces/track";

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
            className="relative rounded-md overflow-hidden"
            onClick={handlePlay}
        >
            <img src={image.url} alt="none-img" />
            <div className="w-ful">
                <span className="flex w-full">{track.name}</span>
                <span className="w-full flex text-gray-400 text-sm">
                    {artist.name}
                </span>
            </div>
        </button>
    );
};
