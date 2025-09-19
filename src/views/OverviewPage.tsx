
import { useGetAllPokemonNamesQuery } from "../services/pokemon";
import PokemonPreview from "../components/PokemonPreview/PokemonPreview";
import { Box, Flex } from "@chakra-ui/react";


const OverviewPage = () => {
    const { data, error, isLoading } = useGetAllPokemonNamesQuery();

    console.log(data);

    if (isLoading) return <p>Loading Pokémons...</p>;
    if (error) return <p>Oh no, something went wrong!</p>
    
    return (
        <>
        <Flex backgroundImage={"url('https://cdn.dribbble.com/userupload/3875672/file/original-42f52449520e8e7940c668566888d84f.png?resize=1600x1200&vertical=center')"}
            bgRepeat="no-repeat"
            bgSize="contain"
            height="90vh"
            width="100vw"
            backgroundPosition="center"
            display="flex"
            >
            <Box maxWidth={"50rem"} maxHeight={"16rem"} 
            overflowY="auto" scrollBehavior="smooth" 
            position="absolute" scrollbar="hidden"
            top="210px" left="645px"
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