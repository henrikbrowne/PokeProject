
import { useGetAllPokemonNamesQuery } from "../services/pokemon";
import PokemonPreview from "../components/PokemonPreview/PokemonPreview";
import { Box, Flex } from "@chakra-ui/react";
import pokedex from '../assets/pokedex.png'
import CsvSmokeTest from "../components/CSVSmokeTest";

const OverviewPage = () => {
    const { data, error, isLoading } = useGetAllPokemonNamesQuery();

    console.log(data);

    if (isLoading) return <p>Loading Pokémons...</p>;
    if (error) return <p>Oh no, something went wrong!</p>


    
    return (
        <>
        <Flex backgroundImage={`url(${pokedex})`}
            bgRepeat="no-repeat"
            bgSize="contain"
            height="100vh"
            width="100vw"
            backgroundPosition="center"
            display="flex"
            >
                <Box maxWidth={"50rem"} maxHeight={"17rem"} 
                overflowY="auto" scrollBehavior="smooth" 
                position="absolute" scrollbar="hidden"
                top="305px" left="638px"
                >
                    {data?.results.map((pokemon) => (
                    <PokemonPreview key={pokemon.name} pokemonName={pokemon.name} />
                    ))} 
                </Box>
        </Flex>
        </>
    )
}

export default OverviewPage;