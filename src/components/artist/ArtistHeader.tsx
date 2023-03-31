/* eslint-disable @next/next/no-img-element */
import { Artists } from "@/interfaces/search";

type Props = {
    artist: Artists;
};

export const ArtistHeader = ({ artist }: Props) => {
    const image =
        artist.images.find((image) => image.width === 320) || artist.images[0];

    return (
        <div className="w-full flex items-center justify-between max-h-[50vh] rounded-md overflow-hidden relative mb-8 bg-black">
            <div>
                <img src={image?.url} alt={artist.name} />
            </div>
            <div className="flex-1 flex items-end justify-center flex-col absolute bottom-0 right-0 p-8 z-10">
                <h1 className="text-2xl font-bold">{artist.name}</h1>
                <span>{`${artist.followers.total}k followers`}</span>
            </div>
        </div>
    );
};
