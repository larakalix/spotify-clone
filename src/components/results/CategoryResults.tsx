/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
    categories: any[];
};

export const CategoryResults = ({ categories }: Props) => {
    return (
        <div className="grid grid-cols-5 gap-8">
            {React.Children.toArray(
                categories.map(({ id, name, icons }) => (
                    <div
                        id={id}
                        className="relative rounded-md overflow-hidden"
                    >
                        <img src={icons[0].url} alt={name} />
                        <h6 className="mt-2">{name}</h6>
                    </div>
                ))
            )}
        </div>
    );
};
