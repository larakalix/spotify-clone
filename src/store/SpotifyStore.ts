import { Category } from "@/interfaces/categories";
import { NewReleases } from "@/interfaces/new_releases";
import { Tracks } from "@/interfaces/track";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type DataProps = {
    search: string;
    playingTrack: any;
    lyrics: string;
};

type StateProps = {
    categories: Category[];
    newReleases: NewReleases[];
    state: DataProps;
    searchResults: Tracks[];
    setState: (data: DataProps) => void;
    setSearchResults: (searchResults: Tracks[]) => void;
    setCategories: (categories: any[]) => void;
    setNewReleases: (newReleases: any[]) => void;
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
                newReleases: [],
                setState: (data: DataProps) =>
                    set((state) => ({ ...state, data })),
                setSearchResults: (searchResults: Tracks[]) =>
                    set({ searchResults }),
                setCategories: (categories: any[]) => set({ categories }),
                setNewReleases: (newReleases: any[]) => set({ newReleases }),
            }),
            {
                name: "spotify-storage",
            }
        )
    )
);
