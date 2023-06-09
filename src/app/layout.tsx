import { LayoutProps } from "@/interfaces/layout";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
    title: "Spotify Clone App",
    description: "Generated by create next app",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={font.className}>
            <body className="bg-barely-black text-white">
                <main className="relative flex flex-col items-center min-h-screen pt-24 px-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
