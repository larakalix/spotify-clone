/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { SpotifyService } from "@/services/SpotifyService";
import { useAuthStore } from "@/store/AuthStore";

const useAuth = () => {
    const { code, auth, login, refresh } = useAuthStore((state) => state);
    const { accessToken, refreshToken, expiresIn } = auth;

    useEffect(() => {
        if (!code) return;

        (async () => {
            try {
                if (accessToken) return;

                const {
                    data: { access_token, refresh_token, expires_in },
                } = await SpotifyService().login(code);

                login({
                    accessToken: access_token,
                    refreshToken: refresh_token,
                    expiresIn: expires_in,
                });

                // window.history.pushState({}, "null", "/");
            } catch (err) {
                // window.location.href = "/";
                console.log("err", err);
            }
        })();
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(async () => {
            try {
                const {
                    data: { access_token, expires_in },
                } = await SpotifyService().refresh({
                    refreshToken,
                });

                refresh({
                    accessToken: access_token,
                    expiresIn: expires_in,
                });
            } catch {
                // window.location.href = "/";
            }
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
};

export default useAuth;
