/* eslint-disable @next/next/no-img-element */
type Props = {
    name: string;
    artistName: string;
    imageUrl: string;
};

export const SearchResultDetails = ({ name, artistName, imageUrl }: Props) => {
    return (
        <>
            <div className="rounded-md overflow-hidden">
                <img
                    className="w-[12.5rem] h-[12.5rem] object-cover"
                    src={imageUrl}
                    alt="none-img"
                />
            </div>
            <div className="w-full truncate">
                <span className="flex w-full text-start">{name}</span>
                <span className="w-full flex text-gray-400 text-sm">
                    {artistName}
                </span>
            </div>
        </>
    );
};
