import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AuthProps = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};

type StateProps = {
    code: string;
    auth: AuthProps;
    login: (auth: AuthProps) => void;
    refresh: (auth: Omit<AuthProps, "refreshToken">) => void;
    logout: () => void;
    setCode: (code: string) => void;
};

const initProps: AuthProps = {
    accessToken: "",
    refreshToken: "",
    expiresIn: 0,
};

export const useAuthStore = create<StateProps>()(
    devtools(
        persist(
            (set, get) => ({
                code: "",
                auth: initProps,
                login: (auth: AuthProps) => {
                    set((state) => ({
                        ...state,
                        auth,
                    }));
                },
                refresh: (auth: Omit<AuthProps, "refreshToken">) => {
                    set((state) => ({
                        ...state,
                        auth: {
                            ...state.auth,
                            ...auth,
                        },
                    }));
                },
                logout: () => {
                    set((state) => ({
                        ...state,
                        code: "",
                        auth: initProps,
                    }));
                },
                setCode: (code: string) => {
                    set((state) => ({
                        ...state,
                        code,
                    }));
                },
            }),
            {
                name: "auth-storage",
            }
        )
    )
);
