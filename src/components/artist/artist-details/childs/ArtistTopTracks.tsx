/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Tracks } from "@/interfaces/search";
import { ArtistTrack } from "./ArtistTrack";

type Props = {
    topTracks: Tracks[];
};

export const ArtistTopTracks = ({ topTracks }: Props) => {
    return (
        <div className="w-full">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">
                Top tracks
            </h1>

            <div className="flex flex-wrap">
                <div className="grid grid-cols-2 gap-8">
                    {React.Children.toArray(
                        topTracks.map((track) => <ArtistTrack track={track} />)
                    )}
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};
