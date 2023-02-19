import { useState } from 'react'
import { Game1 } from './Game1'
import { Game2 } from './Game2'
import { Game3 } from './Game3'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
margin: 1rem;
border-radius: 1rem;
background-color: rgb(248 250 252);
height: calc(44rem); // 4 do header e 2 da margem
`;

// criar usestate para Content
// passar setmenuopen para o botao para fazer onclick
// quando isso acontecer, mostrar menu que já existia
// pra ele ficar em cima do vc acrtou usar z-index
// pra ele ficar à frente. z-index baixo pra vc acertou
// e um z-index alto pro menu
// ismenuopen === true, lógica dentro do return

export const Content = () => {

    const [game, setGame] = useState(1)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <Container>
                {
                    //condicionalmente mudar o game
                    // useState no Content, prop vai ser passada pelo Menu
                    game === 1 ? <Game1 /> : game === 2 ? <Game2 /> : <Game3 />
                }
            </Container>
        </>
    );
};
