"use client";

import { CategoryResults, NewReleasesResults } from "@/components/results";
import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import useAuth from "@/hooks/useAuth";
import { useDashboard } from "@/hooks/useDashboard";

export default function Dashboard() {
    const accessToken = useAuth();
    const { categories, newReleases } = useDashboard();

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <div className="flex items-center justify-center flex-col gap-8">
                    <NewReleasesResults newReleases={newReleases} />
                    <CategoryResults categories={categories} />
                </div>
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
