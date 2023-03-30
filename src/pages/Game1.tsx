import '@total-typescript/ts-reset';
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

type Pokemon = {
    id: number;
    name: string;
    image: string;
};

type PokeapiResponse = {
    id: number;
    name: string;
};

type Ranges = {
    [key: number]: {
        baseId: number;
        maxId: number;
    };
};

export const Game1 = () => {
    const pokemonRanges: Ranges = {
        1: {
            baseId: 1,
            maxId: 151
        },
        2: {
            baseId: 152,
            maxId: 251
        },
        3: {
            baseId: 252,
            maxId: 386
        },
        4: {
            baseId: 387,
            maxId: 493
        },
        5: {
            baseId: 494,
            maxId: 649
        },
        6: {
            baseId: 650,
            maxId: 721
        },
        7: {
            baseId: 722,
            maxId: 809
        },
        8: {
            baseId: 810,
            maxId: 905
        }
    };

    // Defining queue and checking if same Pokémon
    // wasn't selected before
    let pokemonQueue: Array<Pokemon> = [];
    let usedNumbers: Array<number> = [];

    // Fetching the id and the image of the Pokémon
    async function fetchPokemon(randomId: number): Promise<Pokemon> {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        const data = (await response.json()) as Pokemon;

        const pokemonData: Pokemon = {
            id: data.id,
            name: data.name,
            image: `/sprites/${data.id}.svg`
        };

        return pokemonData;
    }

    // Generates a random number inside the range of the selected generations
    // and checks if it was already used
    async function randomNumberGenerator(
        baseGen: number,
        maxGen: number
    ): Promise<number> {
        const baseId = pokemonRanges[baseGen].baseId;
        const maxId = pokemonRanges[maxGen].maxId;

        const generatedNumber: number = Math.floor(
            Math.random() * (maxId - baseId + 1) + baseId
        );

        if (usedNumbers.includes(generatedNumber)) {
            randomNumberGenerator(baseGen, maxGen);
        }
        return generatedNumber;
    }

    async function definePokemon(baseGen: number, maxGen: number) {
        const randomId = await randomNumberGenerator(baseGen, maxGen);
        const pokemon = await fetchPokemon(randomId);
        usedNumbers.push(randomId);
        pokemonQueue.push(pokemon);
        return pokemon;
    }

    // States on generating Pokémons
    const [baseGen, setBaseGen] = useState(1);
    const [maxGen, setMaxGen] = useState(1);
    const [isPokemonLoaded, setIsPokemonLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({} as Pokemon);

    useEffect(() => {
        if (!isPokemonLoaded) {
            definePokemon(baseGen, maxGen).then((pokemon) => {
                setPokemon(pokemon);
                setIsPokemonLoaded(true);
            });
        }
    });

    // States that run the game
    const [input, setInput] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const [pokemons, setPokemons] = useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault;
        let value = event.target.value;
        setInput(value);
        value.split('').map((letter: string, index: number) => {
            letter === pokemon.name.split('')[index]
                ? setIsWrong(false)
                : setIsWrong(true);
        });
        if (value === pokemon.name) {
            setPokemons([...pokemons, pokemon.name]);
            pokemonQueue.shift();
            setIsPokemonLoaded(false);
            setInput('');
        }
    };

    const toProperCase = function (name: string) {
        if (!!name) {
            return name[0].toUpperCase() + name.substring(1).toLowerCase();
        }
    };

    return (
        <Container>
            <Section>
                <Title>Quem &eacute; esse Pok&eacute;mon?</Title>
                <PokemonImage alt={pokemon.name} src={pokemon.image} />
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
