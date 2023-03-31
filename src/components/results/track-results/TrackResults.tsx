import { Tracks } from "@/interfaces/track";
import { Search } from "./childs";

type Props = {
    searchTrackResults: Tracks[];
    lyrics: string;
    chooseTrack: (track: Tracks) => void;
};

export const TrackResults = ({
    searchTrackResults,
    lyrics,
    chooseTrack,
}: Props) => {
    if (searchTrackResults.length === 0)
        return (
            <div className="h-80 flex items-center justify-center">
                <span className="text-white">No results found</span>
            </div>
        );

    return (
        <section className="mb-8">
            <h1 className="w-full mb-4 text-2xl font-bold capitalize">Songs</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {searchTrackResults.map((track: any) => (
                    <Search
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                    />
                ))}
            </div>
            {/* <div className="text-white">
                <h1>Lyrics</h1>
                <p>{lyrics}</p>
            </div> */}
        </section>
    );
};
