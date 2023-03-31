/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/AuthStore";

export const Login = () => {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_SPOTIFY_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
    const { push } = useRouter();
    const { auth } = useAuthStore((state) => state);

    useEffect(() => {
        if (auth.accessToken) push("/dashboard");
    }, []);

    if (auth.accessToken)
        return (
            <div className="flex items-center justify-center h-screen">
                <h1>Redirecting...</h1>
            </div>
        );

    return (
        <div className="flex flex-col items-center justify-between h-screen py-20 bg-barely-black text-white">
            <h1 className="text-4xl font-bold">Spotify</h1>
            <Link
                className="flex items-center justify-center bg-green-500 text-white py-4 px-8 rounded-full"
                href={AUTH_URL}
            >
                Login with Spotify
            </Link>

            <footer>
                <p className="text-sm text-gray-200">
                    Made with ❤️ by{" "}
                    <a
                        className="text-green-500"
                        href="https://www.kalixthedev.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kalixthedev
                    </a>
                </p>
            </footer>
        </div>
    );
};
