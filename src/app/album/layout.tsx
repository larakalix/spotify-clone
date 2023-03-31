import { LayoutNav } from "@/components/dashboard/LayoutNav";
import { LayoutProps } from "@/interfaces/layout";

export const metadata = {
    title: "Album",
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <LayoutNav />

            <main className="w-full relative flex flex-col items-center px-4">
                {children}
            </main>
        </>
    );
}
