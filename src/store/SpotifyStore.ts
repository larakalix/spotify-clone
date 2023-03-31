import { Tracks } from "@/interfaces/track";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type DataProps = {
    search: string;
    playingTrack: any;
    lyrics: string;
};

type StateProps = {
    categories: any[];
    state: DataProps;
    searchResults: Tracks[];
    setState: (data: DataProps) => void;
    setSearchResults: (searchResults: Tracks[]) => void;
    setCategories: (categories: any[]) => void;
};

const initProps: DataProps = {
    search: "",
    playingTrack: null,
    lyrics: "",
};

export const useSpotifyStore = create<StateProps>()(
    devtools(
        persist(
            (set, get) => ({
                categories: [],
                state: initProps,
                searchResults: [],
                setState: (data: DataProps) =>
                    set((state) => ({ ...state, data })),
                setSearchResults: (searchResults: Tracks[]) =>
                    set({ searchResults }),
                setCategories: (categories: any[]) => set({ categories }),
            }),
            {
                name: "spotify-storage",
            }
        )
    )
);
