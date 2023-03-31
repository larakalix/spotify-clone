import React from "react";
import { NewReleaseDescription, NewReleaseImage } from "./childs";
import { NewReleases } from "@/interfaces/new_releases";

type Props = {
    newReleases: NewReleases[];
};

export const NewReleasesResults = ({ newReleases }: Props) => {
    return (
        <>
            <h1 className="w-full mb-4 text-4xl font-bold   ">New Releases</h1>
            <div className="grid grid-cols-4 gap-8">
                {React.Children.toArray(
                    newReleases.map(({ id, name, images, artists }) => (
                        <div
                            id={id}
                            className="relative rounded-md overflow-hidden"
                        >
                            <NewReleaseImage name={name} images={images} />
                            <NewReleaseDescription
                                name={name}
                                artists={artists}
                            />
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
