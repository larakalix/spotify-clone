"use client";

import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import { useCategory } from "@/hooks/useCategory";

type Props = {
    params: { category: string };
};

export default function Category({ params: { category } }: Props) {
    const { category: singleCategory } = useCategory();

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <h1 className="mb-4 capitalize">{category}</h1>
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
