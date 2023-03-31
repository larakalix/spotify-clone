import { useRouter } from "next/navigation";
import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { Artists } from "@/interfaces/search";
import { kFormatter } from "@/utils/utils";

type Props = {
    artist: Artists;
};

export const Search = ({ artist }: Props) => {
    const { push } = useRouter();

    const handleClick = () => {
        push(`/artist/${artist.id}`);
    };

    const image =
        artist.images.find((image: any) => image.width === 320) ||
        artist.images[0];

    return (
        <button
            className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors"
            onClick={handleClick}
        >
            <SearchResultDetails
                imageUrl={image?.url}
                name={artist.name}
                artistName={`${kFormatter(artist.followers.total)} followers`}
            />
        </button>
    );
};
