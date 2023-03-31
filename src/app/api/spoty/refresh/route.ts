import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";

export async function POST(request: NextRequest) {
    const { refreshToken }: any = request.body;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    });

    try {
        const {
            body: { access_token, expires_in },
        } = await spotifyApi.refreshAccessToken();

        return NextResponse.json({ access_token, expires_in });
    } catch (err: any) {
        notFound();
    }
}
