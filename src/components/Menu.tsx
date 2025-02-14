import styled from 'styled-components';
import ButtonComponent from './Button';
import { useGamesDispatch } from '../utils/GamesContext';
import { useMenuContext } from '../utils/MenuContext';

const OpaqueBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    transition: background-color 0.5 ease-in-out;

    &.show {
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.4);
    }

    &.hide {
        z-index: -1;
        background-color: rgba(0, 0, 0, 0);
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

export function Menu() {
    const menuContext = useMenuContext();
    const gameDispatch = useGamesDispatch();

    return (
        <OpaqueBackground
            className={`${menuContext.isMenuOpen ? 'show' : 'hide'}`}
        >
            <Nav className={`${menuContext.isMenuOpen ? 'show' : 'hide'}`}>
                <UnorderedList>
                    <ListItem>
                        <ButtonComponent
                            onClick={() =>
                                gameDispatch({ type: 'CHANGE_GAME', game: 1 })
                            }
                        >
                            Quem é este Pokémon?
                        </ButtonComponent>
                    </ListItem>
                    <ListItem>
                        <ButtonComponent
                            onClick={() =>
                                gameDispatch({ type: 'CHANGE_GAME', game: 2 })
                            }
                        >
                            Game 2
                        </ButtonComponent>
                    </ListItem>
                    <ListItem>
                        <ButtonComponent
                            onClick={() =>
                                gameDispatch({ type: 'CHANGE_GAME', game: 3 })
                            }
                        >
                            Game 3
                        </ButtonComponent>
                    </ListItem>
                </UnorderedList>
            </Nav>
        </OpaqueBackground>
    );
}
