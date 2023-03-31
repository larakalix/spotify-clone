/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";
import { SearchResult } from "@/interfaces/search";

type Props = {
    search: string;
};

export const useSearch = ({ search }: Props) => {
    const { auth } = useAuthStore((state) => state);
    const {
        searchTrackResults,
        searchAlbumsResults,
        searchArtistsResults,
        searchPlaylistsResults,
        searchShowsResults,
        setTrackSearchResults,
        setAlbumsSearchResults,
        setArtistsSearchResults,
        setPlaylitsSearchResults,
        setShowsSearchResults,
        saveActiveTrack,
    } = useSpotifyStore((state) => state);

    const chooseTrack = (track: any) => {
        saveActiveTrack(track);
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: {
                        albums,
                        tracks,
                        artists,
                        playlists,
                        shows,
                        episodes,
                    },
                } = await SpotifyService().getSearch({
                    search,
                    accessToken: auth.accessToken,
                });

                setTrackSearchResults(tracks.items);
                setAlbumsSearchResults(albums.items);
                setArtistsSearchResults(artists.items);
                setPlaylitsSearchResults(playlists.items);
                setShowsSearchResults(shows.items);
            } catch (err) {
                console.log("useSearch___error", err);
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
        searchArtistsResults,
        searchPlaylistsResults,
        searchShowsResults,
        chooseTrack,
    };
};
