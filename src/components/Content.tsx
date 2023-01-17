import styled from "styled-components";
import { Menu } from './Menu'
import { Game } from './Game'

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-content: flex-start;
overflow: auto;

margin-top: 16vh;
height: calc(100vh - 16vh);
width: 100%
`;

export const Content = () => {
    return (
        <Container>
            <Game />
            <Menu />
        </Container>
    );
};
