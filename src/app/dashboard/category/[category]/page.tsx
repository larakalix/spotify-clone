"use client";

import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";

type Props = {
    params: { category: string };
};

export default function Category({ params: { category } }: Props) {
    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <h1 className="mb-4 capitalize">{category}</h1>
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
