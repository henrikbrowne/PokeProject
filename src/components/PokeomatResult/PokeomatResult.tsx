import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { Image } from '@chakra-ui/react'
import { useEffect, useState } from "react";

type PokeomatResultProps = { pokemon:string, flufftext:string };


const PokeomatResult = ({ pokemon, flufftext }: PokeomatResultProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon)
  const url = data?.sprites.front_default ?? "";

  const [showImage, setShowImage] = useState(false);


   

  return (
    <>
    {showImage && <Image rounded="md" src={url} alt="Dan Abramov" />}
    <h1>Your Pokémon: {pokemon}</h1>
    <h1>{flufftext}</h1>
    </>
  );
};

export default PokeomatResult;
