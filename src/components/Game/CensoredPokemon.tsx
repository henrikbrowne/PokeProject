import { useGetPokemonByNameQuery } from "../../services/pokemon";
import Card from "../card";

interface CensoredPokemonProps {
    name: string;
}

const CensoredPokemon = ({name}:CensoredPokemonProps) => {
    const {data, error, isLoading} = useGetPokemonByNameQuery(name);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading pokemon data</p>;

    const pHp = data?.stats[0].base_stat ?? "Unknown";
    const pAbilities = data?.abilities.map((ab: { ability: { name: any; }; }) => ab.ability.name) ?? ["Unknown"];
    const pColor = "lightblue";
    const pType = data?.types[0].type.name ?? "Unknown";
    const pImage = data?.sprites.front_default ?? "";


    return (
        <Card name={"GUESS THE NAME"} hp={pHp} abilityNames={pAbilities} color={pColor} type={pType} image={pImage}></Card>
    )
}

export default CensoredPokemon;