import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";

export async function GET(request: NextRequest) {
    const spotifyApi = new SpotifyWebApi({
        accessToken: String(request.headers.get("accessToken")),
        redirectUri: process.env.NEXT_SPOTIFY_REDIRECT_URI,
        clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
        clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    });

    try {
        const { body } = await spotifyApi.getCategories({
            country: "US",
            locale: "en_US",
            limit: 24,
        });

        return NextResponse.json(body);
    } catch (err: any) {
        console.log("err", err);
        notFound();
    }
}
