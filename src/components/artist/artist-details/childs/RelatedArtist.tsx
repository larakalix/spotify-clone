import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { ArtistsItem } from "@/interfaces/search";
import { useRouter } from "next/navigation";

type Props = {
    artist: ArtistsItem;
};

export const RelatedArtist = ({ artist }: Props) => {
    const { push } = useRouter();

    const handleClick = () => {
        push(`/artist/${artist.id}`);
    };

    const image =
        artist.images.find((image) => image.width === 300) || artist.images[0];

    return (
        <button
            className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors"
            onClick={handleClick}
        >
            <SearchResultDetails
                imageUrl={image.url}
                name={artist?.name}
                artistName={artist?.name!}
            />
        </button>
    );
};
