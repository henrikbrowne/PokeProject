import PokeomatResult from "../components/PokeomatResult/PokeomatResult";

type PokeomatResultProps = {
  pokemonResult: string[];
};

const PokeomatResultPage = () => {
    let input = ["pikachu", "fly", "bitteliten", "normal", "grass"]

    return (
        <>
            <h1>Poke-O-Mat</h1>
            <PokeomatResult input={input} />
        </>
    )
}

export default PokeomatResultPage;