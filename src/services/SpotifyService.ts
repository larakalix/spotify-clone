import { SearchResult } from "@/interfaces/search";
import { useAuthStore } from "@/store/AuthStore";
import axios from "axios";

const baseUrl = "/api/spoty";

const options = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const SpotifyService = () => {
    const login = async (code: string) => {
        const data = await axios.post(
            `${baseUrl}/login`,
            {
                code,
            },
            options
        );

        return data;
    };

    const refresh = async ({ refreshToken }: { refreshToken: string }) => {
        const data = await axios.post(
            `${baseUrl}/refresh`,
            {
                refreshToken,
            },
            options
        );

        return data;
    };

    const getLyrics = async ({
        artist,
        track,
    }: {
        artist: string;
        track: string;
    }) => {
        const { data } = await axios.get<string>(
            `${baseUrl}/lyrics?artist=${artist}&track=${track}`,
            options
        );

        return data;
    };

    const getCategories = async ({ accessToken }: { accessToken: string }) => {
        const {
            data: {
                categories: { items },
            },
        } = await axios.get(`${baseUrl}/categories`, {
            headers: {
                ...options.headers,
                accessToken,
            },
        });

        return items;
    };

    const getNewReleases = async ({ accessToken }: { accessToken: string }) => {
        const {
            data: {
                albums: { items },
            },
        } = await axios.get(`${baseUrl}/new-releases`, {
            headers: {
                ...options.headers,
                accessToken,
            },
        });

        return items;
    };

    const getSearch = async ({
        search,
        accessToken,
    }: {
        search: string;
        accessToken: string;
    }) => {
        const data = await axios.post(
            `${baseUrl}/search`,
            {
                search,
            },
            {
                headers: {
                    ...options.headers,
                    accessToken,
                },
            }
        );

        return data;
    };

    const getAlbum = async ({
        albumId,
        accessToken,
    }: {
        albumId: string;
        accessToken: string;
    }) => {
        const data = await axios.get(`${baseUrl}/album?albumId=${albumId}`, {
            headers: {
                ...options.headers,
                accessToken,
            },
        });

        return data;
    };

    const getArtist = async ({
        artistId,
        accessToken,
    }: {
        artistId: string;
        accessToken: string;
    }) => {
        const data = await axios.get(`${baseUrl}/artist?artistId=${artistId}`, {
            headers: {
                ...options.headers,
                accessToken,
            },
        });

        return data;
    };

    return {
        login,
        refresh,
        getLyrics,
        getCategories,
        getNewReleases,
        getSearch,
        getAlbum,
        getArtist,
    };
};
