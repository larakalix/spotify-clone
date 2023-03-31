"use client";

import { CategoryResults } from "@/components/results/CategoryResults";
import { HydrateWrapper, PlayerWrapper } from "@/components/wrapper";
import useAuth from "@/hooks/useAuth";
import { useDashboard } from "@/hooks/useDashboard";

export default function Dashboard() {
    const accessToken = useAuth();
    const { categories } = useDashboard();

    return (
        <HydrateWrapper>
            <PlayerWrapper>
                <h1 className="mb-4">Categories</h1>
                <CategoryResults categories={categories} />
            </PlayerWrapper>
        </HydrateWrapper>
    );
}
