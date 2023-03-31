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
        const { albumId } = {
            albumId: request.nextUrl.searchParams.get("albumId"),
        };

        const { body: album } = await spotifyApi.getAlbum(String(albumId));

        return NextResponse.json({ album });
    } catch (err: any) {
        console.log("err", err);
        notFound();
    }
}
