import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { Tracks } from "@/interfaces/search";

type Props = {
    track: Tracks;
    chooseTrack: (trackId: string) => void;
};

export const ArtistTrack = ({ track, chooseTrack }: Props) => {
    console.clear();
    console.log("ArtistTrack__component", track);

    const image =
        track.album.images.find((image) => image.width === 300) ||
        track.images[0];
    const artist = track.artists[0];

    return (
        <button
            className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors"
            onClick={() => chooseTrack(track.id)}
        >
            <SearchResultDetails
                imageUrl={image?.url}
                name={track.name}
                artistName={artist?.name!}
            />
        </button>
    );
};
