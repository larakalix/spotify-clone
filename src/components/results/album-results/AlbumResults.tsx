import React from "react";
import { Search } from "./childs";

type Props = {
    searchAlbumsResults: any[];
};

export const AlbumResults = ({ searchAlbumsResults }: Props) => {
    return (
        <section className="mb-8">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">
                Albums
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {React.Children.toArray(
                    searchAlbumsResults.map((album: any) => (
                        <Search album={album} />
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
