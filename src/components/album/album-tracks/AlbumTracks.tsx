import React from "react";
import { BiTime } from "react-icons/bi";
import { Track } from "./childs";

type Props = {
    tracks: any;
    chooseTrack: (track: any) => void;
};

export const AlbumTracks = ({ tracks, chooseTrack }: Props) => {
    return (
        <ul className="flex flex-col items-start gap-4 mt-12 rounded-md p-4 bg-barely-gray">
            <li className="w-full flex items-center justify-between border-b border-barely-gray text-slate-400 pb-4">
                <span className="flex items-center gap-2">
                    <span>#</span>
                    <span>Title</span>
                </span>
                <span className="flex items-center gap-2">
                    Duration <BiTime />
                </span>
            </li>
            {React.Children.toArray(
                tracks.map((track: any) => (
                    <Track track={track} chooseTrack={chooseTrack} />
                ))
            )}
        </ul>
    );
};
