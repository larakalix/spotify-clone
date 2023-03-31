import { useState } from "react";

export const useCategory = () => {
    const [category, setCategory] = useState<any>(null);

    return { category };
};
