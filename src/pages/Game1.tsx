import { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    row-gap: 0;
    align-items: start;
    width: 22rem;
    padding: 1rem;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 1rem;
    align-items: center;
    padding: 1rem;
    min-height: 4rem;
    overflow: hidden;
`

const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 100;
    color: #0075BE;
`

const NameBox = styled.span`
    padding: 2rem;
`

const PokemonImage = styled.img`
    max-height: 8rem;
    max-width: 8rem;
`
const Warning = styled.p`
    font-size: 0.75em;
    color: #0A285F;
    text-align: center;
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
            <Section>
                <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
                <PokemonImage src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${randomId}.svg`} alt={pokemon.name} />
                <TextInput id="pokemon-name" type="text" value={input} onChange={(e) => handleOnChange(e)} autoFocus className={isWrong ? 'shake' : ''} />
                <Warning>Nota: Os nomes seguem a grafia em ingl&ecirc;s</Warning>
                <p>Você acertou:</p>
                <ul>
                    {
                        pokemons.map((p) => <li key={p}>{toProperCase(p)}</li>)
                    }
                </ul>
            </Section>
        </Container>
    );
}
