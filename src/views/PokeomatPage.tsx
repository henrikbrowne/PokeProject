import Pokeomat from "../components/Pokeomat";
import PokeomatResult from "../components/PokeomatResult/PokeomatResult";
import { useState } from "react";

const PokeomatPage = () => {
    const [isResults, setIsResults] = useState(false);
    const [pokemon, setPokemon] = useState("")
    const [flufftext, setFlufftext] = useState("")

    return <>
        {isResults && <PokeomatResult pokemon={pokemon} flufftext={flufftext}/>}
        {!isResults && <Pokeomat 
        setIsResults= {setIsResults}
        setPokemon = {setPokemon}
        setFlufftext = {setFlufftext}
        ></Pokeomat>}
    </>
}

export default PokeomatPage;