import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import NormalType from "../assets/types/normal.png";
import FireType from "../assets/types/fire.png";
import WaterType from "../assets/types/water.png";
import GrassType from "../assets/types/grass.png";
import ElectricType from "../assets/types/electric.png";
import IceType from "../assets/types/ice.png";
import FightingType from "../assets/types/fight.png";
import PoisonType from "../assets/types/poison.png";
import GroundType from "../assets/types/ground.png";
import FlyingType from "../assets/types/flying.png";
import PsychicType from "../assets/types/psychic.png";
import BugType from "../assets/types/bug.png";
import RockType from "../assets/types/rock.png";
import GhostType from "../assets/types/ghost.png";
import DragonType from "../assets/types/dragon.png";
import DarkType from "../assets/types/dark.png";
import SteelType from "../assets/types/steel.png";
import FairyType from "../assets/types/fairy.png";
import Bg from "../assets/bg.png";


interface CardProps {
  name: string;
  hp: string;
  abilityNames: string[];
  type: string;
  image: string;
}

const PokemonTypeColor: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Type images
const PokemonTypeImages: Record<string, string> = {
  normal: NormalType,
  fire: FireType,
  water: WaterType,
  grass: GrassType,
  electric: ElectricType,
  ice: IceType,
  fighting: FightingType,
  poison: PoisonType,
  ground: GroundType,
  flying: FlyingType,
  psychic: PsychicType,
  bug: BugType,
  rock: RockType,
  ghost: GhostType,
  dragon: DragonType,
  dark: DarkType,
  steel: SteelType,
  fairy: FairyType,
};

function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Card: React.FC<CardProps> = ({ name, hp, abilityNames, type, image }) => {
  return (
    <Box
      width="250px"
      height="380px"
      borderRadius="lg"
      overflow="hidden"
      bg={PokemonTypeColor[type]}
      boxShadow="xl"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.01)" }}
      color="var(--primary)"
      border="5px solid"
      borderColor="silver"
    >
      {/* Header */}
      <HStack justify="space-between" mb={2}>
        <Text fontWeight="bold" fontSize="lg" maxW="140px">
          {capitalizeFirstLetter(name)}
        </Text>
        
        <HStack align="flex-end">
          <Text fontSize="sm" fontWeight="semibold">
            HP {hp}
          </Text>
          <Image
                  src={PokemonTypeImages[type]}
                  alt={type}
                  objectFit="contain"
                  w="25px"
                  h="25px"
                />
        </HStack> 
      </HStack>

      {/* Pokémon Image */}
      <Box
        bg="white"
        borderRadius="md"
        overflow="hidden"
        mb={3}
        height="160px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"

        bgImage={`url(${Bg})`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Image
          src={image}
          alt={name}
          objectFit="contain"
          height="200px"
          width="200spx"
        />
      </Box>

      {/* Abilities */}
      <VStack align="start">
        {abilityNames.map((ability, idx) => (
          <Box
            key={idx}
            px={3}
            py={0.5}
            borderRadius="full"
            bg="silver"
            backdropFilter="blur(4px)"
            boxShadow="sm"
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="var(--primary)"
            >
              {capitalizeFirstLetter(ability)}
            </Text>
          </Box>
        ))}
      </VStack>

    </Box>
  );
};

export default Card;

