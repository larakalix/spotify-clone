"use client";

import { AlbumHeader, AlbumTracks } from "@/components/album";
import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import { useAlbumTracks } from "@/hooks/useAlbumTracks";

type Props = {
    params: { albumId: string };
};

export default function Album({ params: { albumId } }: Props) {
    const { album, chooseTrack } = useAlbumTracks({
        albumId,
    });

    if (!album) return null;

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <AlbumHeader album={album} />
                <AlbumTracks
                    tracks={album.tracks.items}
                    chooseTrack={chooseTrack}
                />
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
