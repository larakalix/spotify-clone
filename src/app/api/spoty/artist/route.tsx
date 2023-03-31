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
        const { artistId } = {
            artistId: request.nextUrl.searchParams.get("artistId"),
        };

        const { body: artist } = await spotifyApi.getArtist(String(artistId));
        const { body: topTracks } = await spotifyApi.getArtistTopTracks(
            String(artistId),
            "US"
        );
        const { body: albums } = await spotifyApi.getArtistAlbums(
            String(artistId),
            {
                country: "US",
                limit: 10,
                offset: 0,
            }
        );

        return NextResponse.json({ artist, topTracks, albums });
    } catch (err: any) {
        console.log("err", err);
        notFound();
    }
}
