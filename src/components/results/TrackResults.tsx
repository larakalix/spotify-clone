import { Tracks } from "@/interfaces/track";
import { Search } from "../search/Search";

type Props = {
    searchResults: Tracks[];
    lyrics: string;
    chooseTrack: (track: Tracks) => void;
};

export const TrackResults = ({ searchResults, lyrics, chooseTrack }: Props) => {
    if (searchResults.length === 0)
        return (
            <div className="h-80 flex items-center justify-center">
                <span className="text-white">No results found</span>
            </div>
        );

    return (
        <div className="grid grid-cols-5">
            {searchResults.map((track: any) => (
                <Search
                    track={track}
                    key={track.uri}
                    chooseTrack={chooseTrack}
                />
            ))}
            <div className="text-white">
                <h1>Lyrics</h1>
                <p>{lyrics}</p>
            </div>
        </div>
    );
};
