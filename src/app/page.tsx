/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Login } from "@/components/login/Login";
import { HydrateWrapper } from "@/components/wrapper/HydrateWrapper";
import { Dashboard } from "@/components/dashboard/Dashboard";
import useAuth from "@/hooks/useAuth";
import { useAuthStore } from "@/store/AuthStore";

export default function Home() {
    const { push } = useRouter();
    const { code: storedCode, setCode } = useAuthStore((state) => state);
    const [code] = useState<string | null>(
        storedCode
            ? storedCode
            : typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("code")
            : ""
    );
    const accessToken = useAuth();

    useEffect(() => {
        if (code) {
            setCode(code);
            push("/dashboard");
        }
    }, []);

    if (typeof window === "undefined") return null;

    return <HydrateWrapper>{code ? <Dashboard /> : <Login />}</HydrateWrapper>;
}
