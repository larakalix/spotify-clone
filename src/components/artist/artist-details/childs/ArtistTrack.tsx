import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { Tracks } from "@/interfaces/search";

type Props = {
    track: Tracks;
};

export const ArtistTrack = ({ track }: Props) => {
    console.clear();
    console.log("ArtistTrack__component", track);

    const image =
        track.album.images.find((image) => image.width === 300) ||
        track.images[0];
    const artist = track.artists[0];

    return (
        <div className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors">
            <SearchResultDetails
                imageUrl={image?.url}
                name={track.name}
                artistName={artist?.name!}
            />
        </div>
    );
};
