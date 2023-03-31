import { useEffect, useState } from "react";

export const HydrateWrapper = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) return null;

    return <>{children}</>;
};
