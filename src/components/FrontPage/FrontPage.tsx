import { Button, Box, Text } from "@chakra-ui/react";
import bg from "../../assets/background_img.jpg";
import "./FrontPage.css";
import BuzzwordRain from "./BuzzWordRain";
import PoweredByAi from "./PoweredByAI";
import { Link } from "react-router-dom";

const buzzwords = [
  "Pikachu","Charizard","Bulbasaur","Squirtle","Mewtwo","Eevee","Snorlax",
  "Gengar","Jigglypuff","Psyduck","Togepi","Dragonite","Lucario","Greninja",
  "Gardevoir","Lapras","Onix","Machamp","Alakazam","Scyther","Magikarp",
  "Ditto","Umbreon","Espeon","Sylveon","Chikorita","Cyndaquil","Totodile",
  "Suicune","Entei","Raikou","Blaziken","Sceptile","Infernape","Garchomp",
  "AI","Machine Learning","Neural Net","LLM","RAG","Vector","Inference"
];

export default function FrontPage() {
  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage={`url(${bg})`}
      bgSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
    >
      <BuzzwordRain words={buzzwords} count={50} maxDuration={16} color="whiteAlpha.800" zIndex={1} />

      <Box className="front-page-content-container" position="relative" zIndex={2}>
        <div className="front-page-central-content">
          <Text className="front-page-central-text">
            The next generation pokemon indexing
          </Text>
          <Link to="/overview">
            <Button className="front-page-button">Experience</Button>          
          </Link>
        <PoweredByAi />

        </div>
      </Box>
    </Box>
  );
}
