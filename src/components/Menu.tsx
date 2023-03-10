import styled from 'styled-components';
import ButtonComponent from './Button';

const Opaque = styled.div`
    position: absolute;
    z-index: 5;
    background: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100vw;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Container = styled.div`
    position: absolute;
    z-index: 10;
    top: -1rem;
    left: 101vw;

    animation-name: slide;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;

    display: flex;
    flex-flow: column wrap;

    background: white;
    border: 1px solid black;
    width: 12rem;
    padding: 1rem;
`;

const UnorderedList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    list-style-type: none;
    text-align: center;
`;

const ListItem = styled.li``;

type MenuProps = {
    isMenuOpen: boolean;
    setGameNumber: React.Dispatch<React.SetStateAction<number>>;
};

export function Menu({ isMenuOpen, setGameNumber }: MenuProps) {
    const setGame1 = () => {
        setGameNumber(1);
    };
    const setGame2 = () => {
        setGameNumber(2);
    };
    const setGame3 = () => {
        setGameNumber(3);
    };

    return (
        <Opaque>
            <Wrap>
                <Container>
                    <UnorderedList>
                        <ListItem>
                            <ButtonComponent onClick={setGame1}>
                                Quem é este Pokémon?
                            </ButtonComponent>
                        </ListItem>
                        <ListItem>
                            <ButtonComponent onClick={setGame2}>
                                Game 2
                            </ButtonComponent>
                        </ListItem>
                        <ListItem>
                            <ButtonComponent onClick={setGame3}>
                                Game 3
                            </ButtonComponent>
                        </ListItem>
                    </UnorderedList>
                </Container>
            </Wrap>
        </Opaque>
    );
}
