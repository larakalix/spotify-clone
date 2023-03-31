/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";

export const useDashboard = () => {
    const { auth } = useAuthStore((state) => state);
    const { categories, setCategories } = useSpotifyStore((state) => state);

    useEffect(() => {
        (async () => {
            try {
                const data = await SpotifyService().getCategories({
                    accessToken: auth.accessToken,
                });

                setCategories(data);

                // window.history.pushState({}, "null", "/");
            } catch (err) {
                // window.location.href = "/";
                console.log("err", err);
            }
        })();
    }, []);

    return { categories };
};
