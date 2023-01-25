import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 90%;
`

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
margin-top: 1em;

height: 100%;
padding: 1em;
overflow-y: auto;

background: white;
`
const RightContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
margin-top: 1em;

height: 100%;
padding: 1em;
overflow-y: auto;

background: white;
`

const Title = styled.h1`
font-size: 2.4em;
font-weight: thin;
color: #0075BE;
`

const NameBox = styled.span`
padding: 0.5em;
`

const PokemonImage = styled.img`
min-height: 150px;
min-width: 150px;
max-height: 30%;
max-width: 30%;
`

const TextInput = styled.input`
border: 2px solid #0075BE;
border-radius: 5px;
padding: 0.5em;
`

export const Game1 = () => {

    const [input, setInput] = useState("")
    const [pokemon, setPokemon] = useState({} as any)

    const rngesus = () => {
        return Math.floor(Math.random() * (500 - 1 + 1) + 1)
    }

    const [randomId, setRandomId] = useState(rngesus())

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
    }, [randomId])

    const [isWrong, setIsWrong] = useState(false)

    const [pokemons, setPokemons] = useState<string[]>([])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        setInput(value)
        value.split("").map((letter: string, index: number) => {
            letter === pokemon.name.split("")[index] ? setIsWrong(false) : setIsWrong(true)
        })
        if (value === pokemon.name) {
            setPokemons([...pokemons, pokemon.name])
            setRandomId(rngesus())
            setInput("")
        }
    }

    console.log(pokemons)

    const toProperCase = function(name: string) {
        if (!!name) {
            return name[0].toUpperCase() + name.substring(1).toLowerCase()
        }
    }


    return (
        <Container>
            <LeftContainer>
                <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
                <PokemonImage src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${randomId}.svg`} alt={pokemon.name} />
                <NameBox>{pokemon.name}</NameBox>
                <TextInput id="pokemon-name" type="text" value={input} onChange={(e) => handleOnChange(e)} autoFocus className={isWrong ? 'shake' : ''} />
                <p>Nota: Os nomes seguem a grafia em ingl&ecirc;s</p>
            </LeftContainer>
            <RightContainer>Você acertou:
                <ul>
                    {
                        pokemons.map((p) => <li>{p}</li>)
                    }
                </ul>
            </RightContainer>
        </Container>
    );
}
