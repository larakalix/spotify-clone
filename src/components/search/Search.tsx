/* eslint-disable @next/next/no-img-element */

type Props = {
    track: any;
    chooseTrack: (track: any) => void;
};

export const Search = ({ track, chooseTrack }: Props) => {
    const handlePlay = () => {
        chooseTrack(track);
    };

    return (
        <button onClick={handlePlay}>
            <img src={track.albumUrl} alt="none-img" />
            <div>
                <span>{track.title}</span>
                <span>{track.artist}</span>
            </div>
        </button>
    );
};
