import { useTrack } from "@/hooks/useTrack";

type Props = {
    track: any;
    chooseTrack: (track: any) => void;
};

export const Track = ({ track, chooseTrack }: Props) => {
    const { time } = useTrack({ track });

    return (
        <li className="w-full">
            <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => chooseTrack(track)}
            >
                <span className="flex items-center gap-2">
                    <span className="opacity-50 text-xs">
                        {track.track_number}
                    </span>
                    <span>{track.name}</span>
                </span>
                <span className="flex items-center">{time}</span>
            </button>
        </li>
    );
};
