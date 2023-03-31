export type Category = {
    href: string;
    icons: Icon[];
    id: string;
    name: string;
};

export type Icon = {
    height: number | null;
    url: string;
    width: number | null;
};
