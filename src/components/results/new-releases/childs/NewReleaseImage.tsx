import { Image } from "@/interfaces/new_releases";

/* eslint-disable @next/next/no-img-element */
type Props = { name: string; images: Image[] };

export const NewReleaseImage = ({ name, images }: Props) => {
    const image: Image =
        images.find((image) => image.width === 300) ?? images[0];

    return <img src={image.url} alt={name} />;
};
