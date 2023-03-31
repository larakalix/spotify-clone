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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AlbumTracks
                        tracks={album.tracks.items}
                        chooseTrack={chooseTrack}
                    />
                </div>
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
