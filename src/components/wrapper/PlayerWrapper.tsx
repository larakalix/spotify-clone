import { Player } from "../player/Player";

type Props = {
    children: React.ReactNode;
};

export const PlayerWrapper = ({ children }: Props) => {
    return (
        <>
            <section className="pb-40">{children}</section>

            <>
                <Player />
            </>
        </>
    );
};
