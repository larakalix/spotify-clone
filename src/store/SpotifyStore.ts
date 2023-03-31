import { Category } from "@/interfaces/categories";
import { NewReleases } from "@/interfaces/new_releases";
import { Tracks } from "@/interfaces/track";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type DataProps = {
    search: string;
    playingTrack: string;
    lyrics: string;
};

type StateProps = {
    categories: Category[];
    newReleases: NewReleases[];
    state: DataProps;
    searchTrackResults: Tracks[];
    searchAlbumsResults: any[];
    setState: (data: DataProps) => void;
    saveActiveTrack: (track: any) => void;
    setTrackSearchResults: (searchTrackResults: Tracks[]) => void;
    setAlbumsSearchResults: (searchAlbumsResults: any[]) => void;
    setCategories: (categories: any[]) => void;
    setNewReleases: (newReleases: any[]) => void;
    cleanState: () => void;
};

const initProps: DataProps = {
    search: "",
    playingTrack: "",
    lyrics: "",
};

export const useSpotifyStore = create<StateProps>()(
    devtools(
        persist(
            (set, get) => ({
                categories: [],
                state: initProps,
                searchTrackResults: [],
                searchAlbumsResults: [],
                newReleases: [],
                setState: (data: DataProps) =>
                    set((state) => ({ ...state, data })),
                saveActiveTrack: (track: any) => {
                    const playingTrack = track.uri;
                    set((state) => ({
                        ...state,
                        state: {
                            ...state.state,
                            playingTrack,
                        },
                    }));
                },
                setTrackSearchResults: (searchTrackResults: Tracks[]) =>
                    set({ searchTrackResults }),
                setAlbumsSearchResults: (searchAlbumsResults: any[]) =>
                    set({ searchAlbumsResults }),
                setCategories: (categories: any[]) => set({ categories }),
                setNewReleases: (newReleases: any[]) => set({ newReleases }),
                cleanState: () =>
                    set({
                        categories: [],
                        searchTrackResults: [],
                        searchAlbumsResults: [],
                        newReleases: [],
                        state: initProps,
                    }),
            }),
            {
                name: "spotify-storage",
            }
        )
    )
);
