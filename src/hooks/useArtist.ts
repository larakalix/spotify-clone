/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/AuthStore";
import { SpotifyService } from "@/services/SpotifyService";
import { useSpotifyStore } from "@/store/SpotifyStore";

type Props = {
    artistId: string;
};

export const useArtist = ({ artistId }: Props) => {
    const { auth } = useAuthStore((state) => state);
    const [artist, setArtist] = useState<any>(null);

    const { saveActiveTrack } = useSpotifyStore((state) => state);

    const chooseTrack = (track: any) => {
        saveActiveTrack(track);
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { artist, topTracks, albums, relatedArtists },
                } = await SpotifyService().getArtist({
                    artistId,
                    accessToken: auth.accessToken,
                });

                artist.topTracks = topTracks.tracks;
                artist.albums = albums.items;
                artist.relatedArtists = relatedArtists.artists;

                setArtist(artist);
            } catch (err) {
                console.log("err", err);
            }
        })();

        return () => {
            setArtist(null);
        };
    }, []);

    return { artist, chooseTrack };
};
