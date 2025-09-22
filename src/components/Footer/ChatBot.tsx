import { useState } from "react"
import customerServiceRep from "../../assets/customer_service_rep.jpg"
import "./Chatbot.css"
import { useRef, useEffect } from "react"


async function getResponseFromChat(msg: string): Promise<string> {
    msg = msg.toLowerCase();
    const swearStrings: string[] = ["fuck", "shit", "bitch"];
    const pokemonStrings: string[] = [
        "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
        "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
        "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
        "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok",
        "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
        "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable",
        "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat",
        "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat",
        "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck",
        "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
        "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
        "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
        "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash",
        "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo",
        "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
        "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
        "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute",
        "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
        "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
        "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
        "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar",
        "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
        "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte",
        "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno",
        "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo",
        "Mew"
        ];

    const rhymeResponses: Record<string, string> = {
        "me": "Your chat rhymes with pee!",
        "you": "Your chat rhymes with poo!",
        "him": "Your chat rhymes with Jim",
        "her": "Your chat rhymes with blur",
        "it": "Your chat rhymes with split",
        "them": "Your chat rhymes with on-prem",
        "time": "Your chat rhymes with mime",
        "day": "Your chat rhymes with yay",
        "way": "Your chat rhymes with yay",
        "thing": "Your chat rhymes with zing",
        "man": "Your chat rhymes with Dan",
        "people": "Your chat rhymes with Schteeple",
        "go": "Your chat rhymes with slow",
        "know": "Your chat rhymes with go",
        "see": "Your chat rhymes with pee",
        "get": "Your chat rhymes with regret",
        "say": "Your chat rhymes with yay",
        "do": "Your chat rhymes with poo",
        "for": "Your chat rhymes with store",
        "in": "Your chat rhymes with pin"
    };



    if(swearStrings.some(searchStr => msg.includes(searchStr))) return "Stop swearing. It hurts my PokeFeelings"
    const found = pokemonStrings.find(p => 
        msg.includes(p.toLowerCase())
    )
    if(msg.includes("okay") || msg.includes("cool")) return "Glad you understand, trainer."
    if(msg.includes("lost")) return "Lost? Lost? Lost what?"
    if(msg.includes("trainer")) return "I'm sure you're a great trainer, champ!"
    if(msg.includes("pokemon") && msg.includes("what")) return "My favorite pokemon is Customer SupPokemon."
    if(msg.includes("pokemon")) return "I notice you're asking about pokemon, a subject i know a lot about."
    + " Pokemon are little creatures that can be caught using a PokeBall."
    if(msg.includes("evolve") || msg.includes("evolution")) return "Unfortunately, details about" +
    " evolution are protected by our Privacy Policy. Would you like to know more about GDPR?"
    if(found) return "I really love " + found + ". My favorite pokemon is Customer SupPokemon"
    if(msg.includes("understand")) return "Understand? Try another brand."
    if(msg.includes("help")) "That is a very interesting PokeProblem. Have you tried refreshing the page?"
    if (msg.includes("what")) return "This question vexes me. The only part I understood was \"" + 
            msg.slice(1, msg.length - Math.floor(msg.length / 2)) + "\"";
    if(msg.includes("?")) return "That's a great question. Please forward it to support@pokeco.com"
    if(msg.includes("!")) return "That's a great point. I will take that into consideration in our chats from now on."
    const words = msg.trim().toLowerCase().split(/\s+/);
    const lastWord = words[words.length - 1];

    // Check rhyme responses
    if (rhymeResponses[lastWord]) {
        return rhymeResponses[lastWord];
    }
    const fallbackResponses = [
        `I had trouble understanding "${msg}". Please PokeTry again.`,
        `Hmm... "${msg}" doesn’t ring a PokeBell.`,
        `"${msg}" confused me. Maybe use a different move?`,
        `Unable to process "${msg}". Try again, trainer!`
    ];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

const Chatbot = () => {
  const [chats, setChats] = useState<{ sender: "bot" | "user"; msg: string }[]>([
    { sender: "bot", msg: "Welcome to customer service. How can I assist you today?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)


  async function addChat(msg: string) {
    const trimmed = msg.trim()
    if (!trimmed || isTyping) return

    // add user message
    setChats((prev) => [...prev, { sender: "user", msg: trimmed }])
    setInput("")
    setIsTyping(true)

    try {
      const reply = await Promise.resolve(getResponseFromChat(trimmed))
      setChats((prev) => [...prev, { sender: "bot", msg: reply }])
    } catch (err) {
      setChats((prev) => [
        ...prev,
        { sender: "bot", msg: "Sorry, I ran into an error generating a response." },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
}, [chats, isTyping])

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {chats.map((chat, i) => (
          <div key={i} className={`chat-row ${chat.sender === "user" ? "user" : "bot"}`}>
            {chat.sender === "bot" && (
              <img src={customerServiceRep} alt="Bot" className="chat-avatar" />
            )}
            <div className="chat-bubble">{chat.msg}</div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-row bot">
            <img src={customerServiceRep} alt="Bot" className="chat-avatar" />
            <div className="chat-bubble" aria-live="polite">Typing…</div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && addChat(input)}
          disabled={isTyping}
          aria-label="Message input"
        />
        <button onClick={() => addChat(input)} disabled={isTyping}>
          {isTyping ? "…" : "Send"}
        </button>
      </div>
    </div>
  )
}

export default Chatbot
