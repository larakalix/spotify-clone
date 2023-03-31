"use client";

import { AlbumResults, TrackResults } from "@/components/results";
import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import { useSearch } from "@/hooks/useSearch";

type Props = {
    params: { search: string };
};

export default function Search({ params: { search } }: Props) {
    const { searchTrackResults, searchAlbumsResults, chooseTrack } = useSearch({
        search,
    });

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <h1 className="w-full mb-4 text-4xl font-bold capitalize">
                    {search} search results
                </h1>

                <TrackResults
                    searchTrackResults={searchTrackResults}
                    lyrics=""
                    chooseTrack={chooseTrack}
                />
                <AlbumResults searchAlbumsResults={searchAlbumsResults} />
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
