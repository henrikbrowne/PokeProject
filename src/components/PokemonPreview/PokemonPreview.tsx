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
        <p><strong>Base experience:</strong> {data.base_experience}</p>
        <p><strong>Height:</strong> {data.height}</p>
        <p><strong>Weight:</strong> {data.weight}</p>
        <p>
            <strong>Type(s):</strong>{" "}
            {data.types.map((t: any) => t.type.name).join(", ")}
        </p>
        </div>
    </NavLink>

  );
};

export default PokemonPreview;
