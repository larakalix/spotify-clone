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
        console.log("login_code", code);
        const data = await axios.post(
            `${baseUrl}/login`,
            {
                code,
            },
            options
        );

        console.log("login_data", data);

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

        console.log("refresh_data", data);

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

    return {
        login,
        refresh,
        getLyrics,
        getCategories,
        getNewReleases,
    };
};
