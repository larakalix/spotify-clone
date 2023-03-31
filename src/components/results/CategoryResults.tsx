/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

type Props = {
    categories: any[];
};

export const CategoryResults = ({ categories }: Props) => {
    return (
        <section className="mb-8">
            <h1 className="w-full mb-4 text-4xl font-bold">Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8">
                {React.Children.toArray(
                    categories.map(({ id, name, icons }) => (
                        <Link
                            href={`/dashboard/category/${name.toLowerCase()}`}
                            className="relative rounded-md overflow-hidden"
                        >
                            <img
                                className="w-[12.5rem] h-[12.5rem] object-cover"
                                src={icons[0].url}
                                alt={name}
                            />
                            <h6 className="mt-2 font-medium">{name}</h6>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
};
