type PokeomatResultProps = { pokemon:string, flufftext:string };


const PokeomatResult = ({ pokemon, flufftext }: PokeomatResultProps) => {
  return (
    <>
      <h1>Your Pokémon: {pokemon}</h1>
      <h1>{flufftext}</h1>
    </>
  );
};

export default PokeomatResult;
