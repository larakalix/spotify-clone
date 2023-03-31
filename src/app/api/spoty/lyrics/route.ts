import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
const lyricsFinder = require("lyrics-finder");

export async function GET(request: NextRequest) {
    try {
        const { artist, track } = {
            artist: request.nextUrl.searchParams.get("artist"),
            track: request.nextUrl.searchParams.get("track"),
        };
        const lyrics = (await lyricsFinder(artist, track)) || "No Lyrics Found";

        return NextResponse.json(lyrics);
    } catch (err: any) {
        notFound();
    }
}
