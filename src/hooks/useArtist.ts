/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/AuthStore";
import { SpotifyService } from "@/services/SpotifyService";

type Props = {
    artistId: string;
};

export const useArtist = ({ artistId }: Props) => {
    const { auth } = useAuthStore((state) => state);
    const [artist, setArtist] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { artist, topTracks, albums },
                } = await SpotifyService().getArtist({
                    artistId,
                    accessToken: auth.accessToken,
                });

                artist.topTracks = topTracks.tracks;
                artist.albums = albums.items;

                setArtist(artist);
            } catch (err) {
                console.log("err", err);
            }
        })();

        return () => {
            setArtist(null);
        };
    }, []);

    return { artist };
};
