import { useNavigate, useParams } from "react-router";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import { skipToken } from "@reduxjs/toolkit/query";
import Card from "../components/Card";
import { Button } from "@chakra-ui/react";


const DetailsPage = () => {
    const { name } = useParams();
    const { data, error, isLoading } = useGetPokemonByNameQuery(
        name ?? skipToken
    );
    const navigate = useNavigate();

    if (!name) return null;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred</div>;
    const pName = data?.species.name ?? "Unknown";
    const pHp = data?.stats[0].base_stat ?? "Unknown";
    const pAbilities = data?.abilities.map((ab: { ability: { name: any; }; }) => ab.ability.name) ?? ["Unknown"];
    const pType = data?.types[0].type.name ?? "Unknown";
    const pImage = data?.sprites.front_default ?? "";


    return (
        <>
        <Card name={pName} hp={pHp} abilityNames={pAbilities} type={pType} image={pImage}></Card>
        <Button style={{top:"20px"}} onClick={() => navigate("/overview")}>Go back</Button>
        </>
    )
}

export default DetailsPage;
