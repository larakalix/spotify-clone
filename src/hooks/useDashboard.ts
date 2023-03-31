/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";
import { NewReleases } from "@/interfaces/new_releases";
import { Category } from "@/interfaces/categories";

export const useDashboard = () => {
    const { auth } = useAuthStore((state) => state);
    const { categories, newReleases, setCategories, setNewReleases } =
        useSpotifyStore((state) => state);

    useEffect(() => {
        (async () => {
            try {
                const categories: Category[] =
                    await SpotifyService().getCategories({
                        accessToken: auth.accessToken,
                    });
                setCategories(categories);

                const newReleases: NewReleases[] =
                    await SpotifyService().getNewReleases({
                        accessToken: auth.accessToken,
                    });
                setNewReleases(newReleases);
            } catch (err) {
                console.log("err", err);
            }
        })();
    }, []);

    return { categories, newReleases };
};
