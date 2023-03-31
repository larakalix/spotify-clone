import { intervalToDuration, millisecondsToSeconds } from "date-fns";

export const useTrack = ({ track }: any) => {
    const seconds = millisecondsToSeconds(track.duration_ms);
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
    const zeroPad = (num: number) => String(num).padStart(2, "0");

    const time = `${zeroPad(duration.minutes!)}:${zeroPad(duration.seconds!)}`;

    return {
        time,
    };
};
