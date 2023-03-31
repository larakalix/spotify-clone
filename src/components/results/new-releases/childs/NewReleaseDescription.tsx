import { Artist } from "@/interfaces/new_releases";

type Props = {
    name: string;
    artists: Artist[];
};

export const NewReleaseDescription = ({ name, artists }: Props) => {
    const artist: Artist = artists[0];

    return (
        <div>
            <span className="flex mt-2 font-medium">{name}</span>
            <span className="flex text-gray-400 text-sm">{artist.name}</span>
        </div>
    );
};
