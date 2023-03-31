import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";

export async function POST(request: NextRequest) {
    const { search } = await request.json();

    const spotifyApi = new SpotifyWebApi({
        accessToken: String(request.headers.get("accessToken")),
        redirectUri: process.env.NEXT_SPOTIFY_REDIRECT_URI,
        clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
        clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    });

    try {
        const { body: tracks } = await spotifyApi.searchTracks(search, {
            limit: 48,
        });
        const { body: albums } = await spotifyApi.searchAlbums(search, {
            limit: 48,
        });

        return NextResponse.json({ tracks, albums });
    } catch (err: any) {
        console.log("err", err);
        notFound();
    }
}
