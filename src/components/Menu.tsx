import styled, { css } from 'styled-components';
import ButtonComponent from './Button';

const OpaqueBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    z-index: 1;
    transition: background-color .5 ease-in-out;

    &.show {
        background-color: rgba(0,0,0,0.4);
    }

    &.hide {
        background-color: rgba(0,0,0,0);
    }
`;

const Nav = styled.nav`
    position: absolute;
    z-index: 5;
    background: #fff;
    padding: 1rem;
    top: -0.5rem;

    transition: all 0.5s ease-in-out;

    &.show {
        right: 0.5rem;
    }

    &.hide {
        right: -20rem;
    }
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
    const setGame = (number: number) => {
        setGameNumber(number);
    };

    return (
        <OpaqueBackground className={`${isMenuOpen ? 'show' : 'hide'}`}>
        <Nav className={`${isMenuOpen ? 'show' : 'hide'}`}>
            <UnorderedList>
                <ListItem>
                    <ButtonComponent onClick={() => setGame(1)}>
                        Quem é este Pokémon?
                    </ButtonComponent>
                </ListItem>
                <ListItem>
                    <ButtonComponent onClick={() => setGame(2)}>
                        Game 2
                    </ButtonComponent>
                </ListItem>
                <ListItem>
                    <ButtonComponent onClick={() => setGame(3)}>
                        Game 3
                    </ButtonComponent>
                </ListItem>
            </UnorderedList>
        </Nav>
</OpaqueBackground>
    );
}
