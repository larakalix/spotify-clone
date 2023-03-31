"use client";

import { ArtistHeader } from "@/components/artist";
import { ArtistDetails } from "@/components/artist/artist-details/ArtistDetails";
import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import { useArtist } from "@/hooks/useArtist";

type Props = {
    params: { artistId: string };
};

export default function Artist({ params: { artistId } }: Props) {
    const { artist } = useArtist({
        artistId,
    });

    if (!artist) return null;

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <ArtistHeader artist={artist} />
                <ArtistDetails artist={artist} />
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
