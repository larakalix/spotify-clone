/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";

type Props = {
    search: string;
};

export const useSearch = ({ search }: Props) => {
    const { auth } = useAuthStore((state) => state);
    const {
        searchTrackResults,
        searchAlbumsResults,
        setTrackSearchResults,
        setAlbumsSearchResults,
        saveActiveTrack,
    } = useSpotifyStore((state) => state);

    const chooseTrack = (track: any) => {
        saveActiveTrack(track);
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { albums, tracks },
                } = await SpotifyService().getSearch({
                    search,
                    accessToken: auth.accessToken,
                });

                setTrackSearchResults(tracks.tracks.items);
                setAlbumsSearchResults(albums.albums.items);
            } catch (err) {
                console.log("err", err);
            }
        })();

        return () => {
            setTrackSearchResults([]);
            setAlbumsSearchResults([]);
        };
    }, [search]);

    return {
        searchTrackResults,
        searchAlbumsResults,
        chooseTrack,
    };
};
