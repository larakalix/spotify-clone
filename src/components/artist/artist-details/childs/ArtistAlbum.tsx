import { SearchResultDetails } from "@/components/search/SearchResultDetails";
import { Albums } from "@/interfaces/search";

type Props = {
    album: Albums;
};

export const ArtistAlbum = ({ album }: Props) => {
    const image =
        album.images.find((image) => image.width === 300) || album.images[0];
    const artist = album.artists[0];

    return (
        <div className="relative rounded-md overflow-hidden flex flex-col gap-4 p-4 bg-card-black hover:bg-barely-gray transition-colors">
            <SearchResultDetails
                imageUrl={image.url}
                name={album.name}
                artistName={artist?.name!}
            />
        </div>
    );
};
