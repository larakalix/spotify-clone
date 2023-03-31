/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
    album: any;
};

export const Search = ({ album }: Props) => {
    const { push } = useRouter();

    const handleClick = () => {
        push(`/album/${album.id}`);
    };

    const image =
        album.images.find((image: any) => image.width === 300) ||
        album.images[0];
    const artist = album.artists[0];

    return (
        <button
            className="relative rounded-md overflow-hidden"
            onClick={handleClick}
        >
            <img src={image.url} alt="none-img" />
            <div className="w-ful">
                <span className="flex w-full">{album.name}</span>
                <span className="w-full flex text-gray-400 text-sm">
                    {artist.name}
                </span>
            </div>
        </button>
    );
};
