import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { Box, Button, Image } from '@chakra-ui/react'
import who from "../../assets/who.png";
import "./PokeomatResult.css"

type PokeomatResultProps = { pokemon:string, flufftext:string, setIsResults: (value: boolean)=> void};


const PokeomatResult = ({ pokemon, flufftext, setIsResults }: PokeomatResultProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon)
  const url = data?.sprites.front_default ?? "";

  return (
    <>
    <Box className="background" backgroundImage={`url(${who})`}
      h="100vh"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      p={4}>
    </Box>
    <Box>
      <Box className="pokemon-image-sprite"> 
        {url && <Image rounded="md" src={url} alt={pokemon} />} 
      </Box>

      <Box className="pokemon-flufftext"> 
        <h1>Din Pokémon: {pokemon}</h1> 
        <h2>{flufftext}</h2> 
        <br/>
        <Button onClick={() => setIsResults(false)}>Prøv igjen</Button>
      </Box>
    </Box>

    </>
  );
};

export default PokeomatResult;
