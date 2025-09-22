import Papa from "papaparse";

/*
    1,Hvis du hadde hatt en superkraft, hva ville det vært?,Fly,Bli bitteliten,Lese tanker,Sprute ild
    2,Du drar på ferie til?,Fjellet,Stranda,Byen,Skogen
    3,Folk vil beskrive meg som?,Aggressiv,Morsom,Søt,Sterk
    4,Hva er du redd for?,Vann,Ild,Insekter,Mørke
*/

function getScores(answers: number[]): Record<string, number> {
    const scores: Record<string, number> = {
        Pikachu: 0,
        Charizard: 0,
        Bulbasaur: 0,
        Squirtle: 0,
        Jigglypuff: 0,
        Eevee: 0,
        Gengar: 0,
        Snorlax: 0,
        Mewtwo: 0,
        Psyduck: 0,
        Machamp: 0,
        Alakazam: 0,
        Dragonite: 0,
        Gyarados: 0,
        Lapras: 0,
        Vulpix: 0,
        Onix: 0,
        Scyther: 0,
        Clefairy: 0,
        Pidgeot: 0,
    };

    answers.forEach((answer, index) => {
        switch (index) {
            case 0: // Q1: superpower
                if (answer === 1) { // Fly
                    scores.Pidgeot++;
                    scores.Dragonite++;
                    scores.Charizard++;  // also Charizard
                }
                if (answer === 2) { // Tiny
                    scores.Jigglypuff++;
                    scores.Clefairy++;
                    scores.Eevee++;
                }
                if (answer === 3) { // Mind reading
                    scores.Alakazam++;
                    scores.Mewtwo++;
                    scores.Gengar++;
                }
                if (answer === 4) { // Fire breath
                    scores.Charizard++;
                    scores.Vulpix++;
                    scores.Gyarados++;
                }
                break;

            case 1: // Q2: vacation
                if (answer === 1) { // Mountain
                    scores.Onix++;
                    scores.Machamp++;
                }
                if (answer === 2) { // Beach
                    scores.Lapras++;
                    scores.Squirtle++;
                    scores.Gyarados++;
                }
                if (answer === 3) { // City
                    scores.Pikachu++;
                    scores.Eevee++;
                    scores.Jigglypuff++;
                }
                if (answer === 4) { // Forest
                    scores.Bulbasaur++;
                    scores.Scyther++;
                    scores.Clefairy++;
                }
                break;

            case 2: // Q3: personality
                if (answer === 1) { // Aggressive
                    scores.Machamp++;
                    scores.Charizard++;
                    scores.Gyarados++;
                }
                if (answer === 2) { // Funny
                    scores.Psyduck++;
                    scores.Pikachu++;
                    scores.Jigglypuff++;
                }
                if (answer === 3) { // Cute
                    scores.Clefairy++;
                    scores.Eevee++;
                    scores.Bulbasaur++;
                }
                if (answer === 4) { // Strong
                    scores.Dragonite++;
                    scores.Snorlax++;
                    scores.Onix++;
                }
                break;

            case 3: // Q4: fear
                if (answer === 1) { // Water
                    scores.Squirtle++;
                    scores.Lapras++;
                }
                if (answer === 2) { // Fire
                    scores.Vulpix++;
                    scores.Charizard++;
                }
                if (answer === 3) { // Insects
                    scores.Scyther++;
                    scores.Bulbasaur++;
                }
                if (answer === 4) { // Dark
                    scores.Gengar++;
                    scores.Mewtwo++;
                }
                break;
        }
    });

    return scores;
}

async function getData(): Promise<string[][]>{
    const res = await fetch("/poke_o_mat.csv");
    if (!res.ok) throw new Error(`Failed to fetch CSV: ${res.status}`);
    const text = await res.text();

    const parsed = Papa.parse<string[]>(text, {
        header: false,
        skipEmptyLines: true,
        delimiter: ";"
    });   

    console.log("CSV rows:", parsed.data);
    return parsed.data;
}

function getKeyWithHighestValue(obj: Record<string, number>): string {
  const keys = Object.keys(obj);

  return keys.reduce((highestKey, currentKey) => {
    return obj[currentKey] > obj[highestKey] ? currentKey : highestKey;
  });
}


/*
    @Params: an ordered array of numbers, corresponding to poke_o_mat.csv
    @Returns: an array consisting of 
        [0]     a pokemon type as a string
        [1-4]   the answers formatted as strings

*/

export const mapResultToPokemon = async (answers: number[]): Promise<string[]> => {
  const data = await getData();
  const scores = getScores(answers);
  const result: string[] = [];

  // winner
  result[0] = getKeyWithHighestValue(scores);

  // selected option texts
  for (let i = 1; i <= 4; i++) {
    const row = data[i - 1];
    const answer = answers[i - 1];
    result[i] = row[answer + 1];
  }
  console.log("--RESULT FROM ENGINE--")
  console.log(result)
  console.log("--RESULT FROM ENGINE--")

  return result;
};


export default mapResultToPokemon;
