/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArtistsItem } from "@/interfaces/search";
import { RelatedArtist } from "./RelatedArtist";

type Props = {
    relatedArtists: ArtistsItem[];
};

export const ArtistRelatedArtists = ({ relatedArtists }: Props) => {
    return (
        <div className="w-full">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">
                Related Artists
            </h1>

            <div className="flex flex-wrap">
                <div className="grid grid-cols-2 gap-8">
                    {React.Children.toArray(
                        relatedArtists.map((artist) => (
                            <RelatedArtist artist={artist} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
