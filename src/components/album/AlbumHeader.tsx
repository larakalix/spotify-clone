/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
    album: any;
};

export const AlbumHeader = ({ album }: Props) => {
    const image =
        album?.images.find((image: any) => image.width === 300) ||
        album?.images[0];
    const littleImage =
        album?.images.find((image: any) => image.width === 64) ||
        album?.images[0];
    const artist = album?.artists[0];

    const isExplicit = album?.explicit;

    return (
        <div className="w-full">
            <div className="flex gap-8">
                <div className="rounded-sm overflow-hidden">
                    <img src={image.url} alt={album.name} />
                </div>
                <div className="flex-1 pt-8">
                    <span className="flex text-gray-400 text-sm">
                        {album.release_date}
                    </span>
                    <h1 className="flex justify-between items-start w-full mb-4 text-4xl font-bold capitalize">
                        <span className="flex flex-col">
                            <span className="text-sm">Album</span>
                            {album.name}
                        </span>

                        {!isExplicit && (
                            <span className="flex text-spoty-green text-sm border border-spoty-green rounded-full py-2 px-8">
                                Explicit
                            </span>
                        )}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden">
                            <img
                                className="w-11 h-11 "
                                src={littleImage.url}
                                alt={artist.name}
                            />
                        </div>
                        <span className="flex  w-full text-sm font-bold capitalize">
                            {artist.name}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
