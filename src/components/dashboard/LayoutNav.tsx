"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/AuthStore";
import { useSpotifyStore } from "@/store/SpotifyStore";
import { SearchBar } from "../search/SearchBar";
import Image from "next/image";

type Props = {
    logo: string;
};

export const LayoutNav = ({ logo }: Props) => {
    const { logout } = useAuthStore((state) => state);
    const { cleanState } = useSpotifyStore((state) => state);
    const { push } = useRouter();

    const handleLogout = () => {
        cleanState();
        logout();
        push("/");
    };

    return (
        <nav className="w-full absolute top-0 z-10">
            <ul className="flex items-center justify-between bg-black py-4 px-8">
                <li>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link href="/dashboard">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={130}
                                    height={40}
                                    className="brightness-[50]"
                                />
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <SearchBar />
                        </li>
                        <li>
                            <button
                                className="boreder border-green-500 px-4 py-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
