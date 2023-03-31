import { Player } from "../player/Player";

type Props = {
    children: React.ReactNode;
};

export const PlayerWrapper = ({ children }: Props) => {
    return (
        <>
            <section className="w-full max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl pb-40">
                {children}
            </section>

            <>
                <Player />
            </>
        </>
    );
};
