import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    margin: 1em 0 1em 1em;
    width: calc(90vw - 2em);
    background: white;
    padding: 1em;
`;

const Title = styled.h1`
    font-size: 2.4em;
    font-weight: thin;
    color: #0075BE;
`;

const Input = styled.input`
    border: 2px solid #0075BE;
    border-radius: 5px;
    padding: 0.5em;
`;

export const Game = () => {
    return (
        <Container>
            <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur" />
            <form>
                <Input id="pokemon-name" type="text" autoFocus />
            </form>
            <p>Nota: Os nomes seguem a grafia em ingl&ecirc;s</p>
        </Container>
    );
};
