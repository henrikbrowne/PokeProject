import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { Box, Flex, Image } from '@chakra-ui/react'
import who from "../../assets/who.png";
import "./PokeomatResult.css"

type PokeomatResultProps = { pokemon:string, flufftext:string };


const PokeomatResult = ({ pokemon, flufftext }: PokeomatResultProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon)
  const url = data?.sprites.front_default ?? "";

  return (
    <>
    <Flex flexDirection={"column"} backgroundImage={`url(${who})`}
      h="100vh"
      bgSize="contain"
      bgPos="center"
      bgRepeat="no-repeat"
      p={4}>
      <h1>Your Pokémon: {pokemon}</h1>
      <Box className="pokemon-image-sprite">
        {url && <Image rounded="md" src={url} alt={pokemon} />}
      </Box>
      <h2>{flufftext}</h2>
    </Flex>
    </>
  );
};

export default PokeomatResult;
