import React from "react";
import { useGetAllPokemonNamesQuery } from "../../services/pokemon";
import CensoredPokemon from "./CensoredPokemon";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import './Game.css'

const Game = () => {
    const [score, setScore] = React.useState(0);
    const [difficulty, setDifficulty] = React.useState(0);
    const DIFFICULTY_MIN = 0;
    const DIFFICULTY_MAX = 3;
    const difficultyLabels = ["0 – Easy", "1 – Normal", "2 – Hard", "3 – Expert"];

    const handleClick = (selected:string, expected: string) => () => {
        console.log(`Selected: ${selected}, Expected: ${expected}`);
        if (selected === expected) {
            alert("Correct!");
            setScore(score + 1);
        } else {
            alert("Wrong! Try again.");
            setScore(score - 1);
        }
    }


    const { data, error, isLoading } = useGetAllPokemonNamesQuery();
        if (isLoading) return <p>Loading Pokémons...</p>;
        if (error) return <p>Oh no, something went wrong!</p>

    // Generate a selection of four pokemon
    const getRandomPokemons = (pokemonList, count: number) => {
        const shuffled = [...pokemonList.results].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    const selectedPokemons = getRandomPokemons(data, 4);
    //The pokemon has 3 data points - hp, image and abilities
    //We show the pokemon on index 0 with censored name
    //Display 4 buttons, where the user guesses the name of the pokemon
    console.log(selectedPokemons);

    const randomIndex = Math.floor(Math.random() * selectedPokemons.length);

    return (
        <div className="game-container">
        <Text className="score-text">Score: {score}</Text>
        <label className="difficulty-label" htmlFor="difficulty-select">
        Difficulty
        </label>
        <select
        id="difficulty-select"
        value={difficulty}
        onChange={(e) =>
            setDifficulty(
            Math.min(DIFFICULTY_MAX, Math.max(DIFFICULTY_MIN, Number(e.target.value)))
            )
        }
        className="difficulty-select"
        >
        {difficultyLabels.map((label, idx) => (
            <option key={idx} value={idx}>
            {label}
            </option>
        ))}
        </select>
        <CensoredPokemon name={selectedPokemons[randomIndex].name} difficulty={difficulty} />
        <div className="button-grid">
            {selectedPokemons.map((pokemon) => (
                <Button
                className="pokemon-button"
                onClick={handleClick(selectedPokemons[randomIndex].name, pokemon.name)}
                key={pokemon.name}
                >
                {pokemon.name}
                </Button>
            ))}
            </div>
        </div>
    )
}

export default Game;
