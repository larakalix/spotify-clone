/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Albums } from "@/interfaces/search";
import { ArtistAlbum } from "./ArtistAlbum";
import { ArtistTrack } from "./ArtistTrack";

type Props = {
    albums: Albums[];
};

export const ArtistAlbums = ({ albums }: Props) => {
    return (
        <div className="w-full">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">
                Albums
            </h1>

            <div className="flex flex-wrap">
                <div className="grid grid-cols-2 gap-8">
                    {React.Children.toArray(
                        albums.map((album) => <ArtistAlbum album={album} />)
                    )}
                </div>
            </div>
        </div>
    );
};
