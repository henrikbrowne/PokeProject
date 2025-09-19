import { NavLink } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../services/pokemon";
import "./PokemonPreview.css";

type PokemonPreviewProps = {
  pokemonName: string;
};

const PokemonPreview = ({ pokemonName }: PokemonPreviewProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  if (error) return <div className="pokemon-error">Oh no, there was an error!</div>;
  if (isLoading) return <div className="pokemon-loading">Loading...</div>;
  if (!data) return null;

  console.log(data.types);

  return (
    <NavLink to={`/details/${data.species.name}`}>
        <div className="pokemon-card">
        <img
            className="pokemon-image"
            src={data.sprites.front_default}
            alt={data.species.name}
        />
        <h3 className="pokemon-name">
            {data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}
        </h3>
        </div>
    </NavLink>

  );
};

export default PokemonPreview;
