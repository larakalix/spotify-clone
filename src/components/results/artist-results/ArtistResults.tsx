import React from "react";
import { Search } from "./childs";
import { Artists } from "@/interfaces/search";

type Props = {
    searchArtistsResults: Artists[];
};

export const ArtistResults = ({ searchArtistsResults }: Props) => {
    return (
        <section className="mb-8">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">
                Artists
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {React.Children.toArray(
                    searchArtistsResults.map((artist: Artists) => (
                        <Search artist={artist} />
                    ))
                )}
                {/* <div className="text-white">
        <h1>Lyrics</h1>
        <p>{lyrics}</p>
    </div> */}
            </div>
        </section>
    );
};
