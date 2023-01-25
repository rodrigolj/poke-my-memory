import styled from "styled-components";
import {useState} from 'react'
import { Game1 } from './Game1'
import { Game2 } from './Game2'
import { Game3 } from './Game3'
import { Menu } from './Menu'

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

    const [game, setGame] = useState(1)

    return (
        <Container>
            {
                //condicionalmente mudar o game
                // useState no Content, prop vai ser passada pelo Menu
            game === 1 ? <Game1 /> : game === 2 ? <Game2 /> : <Game3 />
            }
            <Menu setGame={setGame}/>
            { console.log(game)}
        </Container>
    );
};
