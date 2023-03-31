/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";

type Props = {
    albumId: string;
};

export const useAlbumTracks = ({ albumId }: Props) => {
    const { auth } = useAuthStore((state) => state);
    const [album, setAlbum] = useState<any>(null);

    const { saveActiveTrack } = useSpotifyStore((state) => state);

    const chooseTrack = (track: any) => {
        saveActiveTrack(track);
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { album },
                } = await SpotifyService().getAlbum({
                    albumId,
                    accessToken: auth.accessToken,
                });

                setAlbum(album);
            } catch (err) {
                console.log("err", err);
            }
        })();

        return () => {
            setAlbum(null);
        };
    }, []);

    return { album, chooseTrack };
};
