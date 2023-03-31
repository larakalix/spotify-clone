"use client";

import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export const Player = () => {
    const { auth } = useAuthStore((state) => state);
    const { state } = useSpotifyStore((state) => state);
    const [play, setPlay] = useState(false);

    const { accessToken } = auth;
    const trackUri = state.playingTrack;

    useEffect(() => {
        setPlay(true);
    }, [trackUri]);

    if (!accessToken) return null;

    return (
        <div className="sticky bottom-0 w-[calc(100%-32px)] mb-4 bg-spoty-gray rounded-md p-2">
            <SpotifyPlayer
                token={accessToken}
                showSaveIcon
                callback={(state) => !state.isPlaying && setPlay(false)}
                play={play}
                uris={trackUri ? trackUri : []}
                styles={{
                    activeColor: "#ffffff",
                    bgColor: "#333333",
                    color: "#ffffff",
                    loaderColor: "#fffffff",
                    sliderColor: "#1ed760",
                    trackArtistColor: "#ccc",
                    trackNameColor: "#fff",
                    height: 55,
                }}
            />
        </div>
    );
};
