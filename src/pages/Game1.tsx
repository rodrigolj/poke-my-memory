import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    row-gap: 0;
    align-items: start;
    width: 22rem;
    padding: 1rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 1rem;
    align-items: center;
    padding: 1rem;
    min-height: 4rem;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 100;
    color: #0075be;
`;

const PokemonImage = styled.img`
    max-height: 8rem;
    max-width: 8rem;
`;
const Warning = styled.p`
    font-size: 0.75em;
    color: #0a285f;
    text-align: center;
`;

export const Game1 = () => {
    // Type declarations

    type PokeAPIReturn = {
        id: number;
        name: string;
    }

    type Ranges = {
        [key: number]: {
            baseId: number;
            maxId: number;
        }
    }

    // Dealing with the Pokémon selection

    // This defines the ranges for each generation
    const pokemonRanges: Ranges = {
        1: {
            baseId: 1,
            maxId: 151,
        },
        2: {
            baseId: 152,
            maxId: 251,
        },
        3: {
            baseId: 252,
            maxId: 386,
        },
        4: {
            baseId: 387,
            maxId: 493,
        },
        5: {
            baseId: 494,
            maxId: 649,
        },
        6: {
            baseId: 650,
            maxId: 721,
        },
        7: {
            baseId: 722,
            maxId: 809,
        },
        8: {
            baseId: 810,
            maxId: 905,
        },
    }


    interface PokemonQueue {
        [key: number]: { name: string, image: string };
    }

    // Defining queue and checking if same Pokémon
    // wasn't selected before
    const pokemonQueue: PokemonQueue = {};
    const usedNumbers: number[] = [];

    // Fetching the id and the image of the Pokémon
    function fetchPokemon(randomId: number) {
        fetch(`{https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json() as Promise<PokeAPIReturn>)
            .then((data) => {
                pokemonQueue[data.id] = { name: data.name, image: `../public/assets/sprites/spirtes/pokemon/other/dream_world/${data.id}.svg` };
            });
    }

    // Generates a random number inside the range of the selected generations
    // and checks if it was already used
    function randomNumberGenerator(baseGen: number, maxGen: number) {
        const baseId = pokemonRanges[baseGen].baseId;
        const maxId = pokemonRanges[maxGen].maxId;

        const generatedNumber: number = Math.floor(Math.random() * (maxId - baseId + 1) + baseId);

        if (usedNumbers.includes(generatedNumber)) {
            randomNumberGenerator(baseGen, maxGen);
        } else {
            usedNumbers.push(generatedNumber);
            fetchPokemon(generatedNumber);
            setPokemon(pokemonQueue[generatedNumber]);
        }

    }

    // States on generating Pokémons
    const [baseGen, setBaseGen] = useState(1);
    const [maxGen, setMaxGen] = useState(1);
    const [pokemon, setPokemon] = useState(randomNumberGenerator(baseGen, maxGen));

    // States that run the game
    const [input, setInput] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const [pokemons, setPokemons] = useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInput(value);
        value.split('').map((letter: string, index: number) => {
            letter === pokemon.name.split('')[index]
                ? setIsWrong(false)
                : setIsWrong(true);
        });
        if (value === pokemon.name) {
            setPokemons([...pokemons, pokemon.name]);
            setRandomId(randomNumberGenerator(baseGen, maxGen));
            setInput('');
        }
    };

    console.log(pokemons);

    const toProperCase = function(name: string) {
        if (!!name) {
            return name[0].toUpperCase() + name.substring(1).toLowerCase();
        }
    };

    return (
        <Container>
            <Section>
                <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
                <PokemonImage alt={pokemon.name} />
                <TextInput
                    id="pokemon-name"
                    type="text"
                    value={input}
                    onChange={(ev) => handleOnChange(ev)}
                    autoFocus
                    className={isWrong ? 'shake' : ''}
                />
                <Warning>
                    Nota: Os nomes seguem a grafia em ingl&ecirc;s
                </Warning>
                <p>Você acertou:</p>
                <ul>
                    {pokemons.map((pkmn) => (
                        <li key={pkmn}>{toProperCase(pkmn)}</li>
                    ))}
                </ul>
            </Section>
        </Container>
    );
};
