import { useGetPokemonByNameQuery } from "../../services/pokemon";
import Card from "../card";

interface CensoredPokemonProps {
    name: string;
    difficulty: number;
}

const CensoredPokemon = ({name, difficulty}:CensoredPokemonProps) => {
    const {data, error, isLoading} = useGetPokemonByNameQuery(name);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading pokemon data</p>;
    console.log(difficulty)
    const pHp = data?.stats[0].base_stat ?? "Unknown";
    const pAbilities = (difficulty >= 1) ? ["???"] : data?.abilities.map((ab: { ability: { name: any; }; }) => ab.ability.name) ?? ["Unknown"];
    const pType = (difficulty >= 2) ? "" : data?.types[0].type.name ?? "Unknown";
    const pImage = (difficulty >= 3) ? "" : data?.sprites.front_default ?? "";

    
    

    return (
        <Card name={"???"} hp={pHp} abilityNames={pAbilities} type={pType} image={pImage}></Card>
    )
}

export default CensoredPokemon;