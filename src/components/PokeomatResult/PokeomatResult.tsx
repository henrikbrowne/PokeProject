type PokeomatResultProps = { input: string[] };

const DEFAULTS = [
  "Superkraft: du har en unik stil.",
  "Ferie: du finner ro der du trives best.",
  "Rykte: du har en tydelig vibe.",
  "Frykt: du kjenner dine grenser.",
];

const Q_RULES: Array<Array<{ keys: string[]; text: string }>> = [
  [
    { keys: ["fly"], text: "Du elsker frihet og utsikt" },
    { keys: ["bitteliten"], text: "Snartenkt og smidig, sniker deg inn overalt" },
    { keys: ["lese tanker"], text: "Analytisk og rolig. Forstår alle rundt deg." },
    { keys: ["sprute ild"], text: "Modig og lidenskapelig, men du kan fyre deg opp skikkelig!" },
  ],
  [
    { keys: ["fjellet"], text: "Fjellet kaller, der får du ro." },
    { keys: ["stranda"], text: "Stranda gir ro, der kommer du i god flyt" },
    { keys: ["byen"], text: "Bytempo og teknologi, du er elektrisk" },
    { keys: ["skogen"], text: "Skogen passer deg, du liker å se ting gro." },
  ],
  [
    { keys: ["aggressiv"], text: "Du angriper først, spørr senere." },
    { keys: ["morsom"], text: "Du sprer god stemning."},
    { keys: ["søt"], text: "Uimotståelig søt" },
    { keys: ["sterk"], text: "Standhaftig og robust." },
  ],
  [
    { keys: ["vann"], text: "Vann er akilleshælen din! Kan du svømme?" },
    { keys: ["ild"], text: "Ild skremmer, du har brent deg før." },
    { keys: ["insekter"], text: "Insekter? Æsj." },
    { keys: ["mørke"], text: "Mørket uroer deg, du søker mot lyset." },
  ],
];

function norm(s: string = "") {
  return s
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ø/g, "o").replace(/å/g, "a").replace(/æ/g, "ae");
}

function pickSnippet(qIndex: number, raw: string | undefined) {
  const t = norm(raw || "");
  for (const rule of Q_RULES[qIndex]) {
    if (rule.keys.some(k => t.includes(norm(k)))) return rule.text;
  }
  return DEFAULTS[qIndex];
}

const cap = (s: string = "") => (s ? s[0].toUpperCase() + s.slice(1) : s);

const PokeomatResult = ({ input }: PokeomatResultProps) => {
  const [name, a1, a2, a3, a4] = [
    input?.[0] ?? "",
    input?.[1] ?? "",
    input?.[2] ?? "",
    input?.[3] ?? "",
    input?.[4] ?? "",
  ];

  const lines = [
    pickSnippet(0, a1),
    pickSnippet(1, a2),
    pickSnippet(2, a3),
    pickSnippet(3, a4),
  ];

  return (
    <>
      <h1>Your Pokémon: {cap(name) || "—"}</h1>
      <ul>
        {lines.map((text, i) => (
          <li key={i}>{i + 1}) {text}</li>
        ))}
      </ul>
    </>
  );
};

export default PokeomatResult;
