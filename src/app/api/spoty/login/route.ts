import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";

export async function POST(request: NextRequest) {
    const { code } = await request.json();

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.NEXT_SPOTIFY_REDIRECT_URI,
        clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
        clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
    });

    try {
        const { body } = await spotifyApi.authorizationCodeGrant(code);

        return NextResponse.json(body);
    } catch (err: any) {
        console.log("err", err);
        notFound();
    }
}
