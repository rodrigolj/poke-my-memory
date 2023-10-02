import { Game1 } from './Game1';
import { Game2 } from './Game2';
import { Game3 } from './Game3';
import styled from 'styled-components';
import { useGames } from 'utils/GamesContext';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
    border-radius: 1rem;
    background-color: rgb(248 250 252);
    height: calc(44rem); // 4 do header e 2 da margem
`;

export function Content() {
    const gameNumber = useGames();
    return (
        <>
            <Container>
                {gameNumber.game === 1 ? (
                    <Game1 />
                ) : gameNumber.game === 2 ? (
                    <Game2 />
                ) : (
                    <Game3 />
                )}
            </Container>
        </>
    );
}
