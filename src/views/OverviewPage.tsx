
import { useGetAllPokemonNamesQuery } from "../services/pokemon";
import PokemonPreview from "../components/PokemonPreview/PokemonPreview";


const OverviewPage = () => {
    const { data, error, isLoading } = useGetAllPokemonNamesQuery();

    console.log(data);

    if (isLoading) return <p>Loading Pokémons...</p>;
    if (error) return <p>Oh no, something went wrong!</p>
    
    return (
        <>
            {data?.results.slice(0, 10).map((pokemon) => (
            <PokemonPreview key={pokemon.name} pokemonName={pokemon.name} />
            ))} 
        </>
    )
}

export default OverviewPage;