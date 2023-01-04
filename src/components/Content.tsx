import styled from "styled-components";
import { Menu } from './Menu'
import { Game } from './Game'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16vh;
    gap: 1em;
    height: calc(100vh - 16vh);
`;

export const Content = () => {
    return (
        <Container>
            <Game />
            <Menu />
        </Container>
    );
};
