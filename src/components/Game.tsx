import { useEffect, useState } from "react";
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
    // To use useState, you must set a const
    // with the name as an array containing
    // first the var name and second the method
    //
    // useState here can have a initial value
    // which, in this case, is an empty string
    const [input, setInput] = useState("")
    const [pokemon, setPokemon] = useState({} as any)
    console.log("Pokemon: ", pokemon);

    const randomPokemon = () => {
        return Math.floor(Math.random() * (500 - 1 + 1) + 1)
    }

    const [randomId, setRandomId] = useState(randomPokemon())

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
    }, [randomId])

    const handleOnChange = (value:string) => {
        // Validations of pokemon name value
        setInput(value)
    }

    return (
        <Container>
            <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
            <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${randomId}.svg`} alt={pokemon.name} />
            <form>
                <Input id="pokemon-name" type={"text"} autoFocus onChange={(event) => {
                    handleOnChange(event.target.value)
                }
                } />
            </form>
            <p>Nota: Os nomes seguem a grafia em ingl&ecirc;s</p>
        </Container>
    );
};
