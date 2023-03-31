import { LayoutNav } from "@/components/dashboard/LayoutNav";
import { LayoutProps } from "@/interfaces/layout";

export const metadata = {
    title: "Spotify Clone - Web Player: Music for everyone",
    description:
        "Spotify is a digital music service that gives you access to millions of songs.",
    icons: {
        icon: "/logo.ico",
    },
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <LayoutNav logo="./../../logo-spotify.svg" />

            <main className="w-full relative flex flex-col items-center px-4">
                {children}
            </main>
        </>
    );
}
