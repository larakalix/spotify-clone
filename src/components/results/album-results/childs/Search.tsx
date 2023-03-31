/* eslint-disable @next/next/no-img-element */
import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { useRouter } from "next/navigation";

type Props = {
    album: any;
};

export const Search = ({ album }: Props) => {
    const { push } = useRouter();

    const handleClick = () => {
        push(`/album/${album.id}`);
    };

    const image =
        album.images.find((image: any) => image.width === 300) ||
        album.images[0];
    const artist = album.artists[0];

    return (
        <button
            className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colorsx"
            onClick={handleClick}
        >
            <SearchResultDetails
                imageUrl={image.url}
                name={album.name}
                artistName={artist.name}
            />
        </button>
    );
};
