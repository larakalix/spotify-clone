import { Player } from "../player/Player";

type Props = {
    children: React.ReactNode;
};

export const PlayerWrapper = ({ children }: Props) => {
    return (
        <>
            <section className="w-full max-w-full md:max-w-5xl pb-40">
                {children}
            </section>

            <>
                <Player />
            </>
        </>
    );
};
