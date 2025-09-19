import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";

interface CardProps {
  name: string;
  hp: string;
  abilityNames: string[];
  type: string;
  image: string;
}

const PokemonTypeColor: Record<string, string> = {
  ["normal"]: "#A8A77A",
  ["fire"]: "#EE8130",
  ["water"]: "#6390F0",
  ["grass"]: "#7AC74C",
  ["electric"]: "#F7D02C",
  ["ice"]: "#96D9D6",
  ["fighting"]: "#C22E28",
  ["poison"]: "#A33EA1",
  ["ground"]: "#E2BF65",
  ["flying"]: "#A98FF3",
  ["psychic"]: "#F95587",
  ["bug"]: "#A6B91A",
  ["rock"]: "#B6A136",
  ["ghost"]: "#735797",
  ["dragon"]: "#6F35FC",
  ["dark"]: "#705746",
  ["steel"]: "#B7B7CE",
  ["fairy"]: "#D685AD"
};

const Card: React.FC<CardProps> = ({
  name,
  hp,
  abilityNames,
  type,
  image,
}) => {
  return (
    <Box
      width="250px"
      height="350px"
      borderRadius="lg"
      overflow="hidden"
      bg={PokemonTypeColor[type]}
      boxShadow="lg"
      p={3}
    >
      {/* Header */}
      <HStack justify="space-between" mb={2}>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <VStack align="flex-end">
          <Text fontSize="sm">HP {hp}</Text>
          <Text fontSize="xs" textTransform="capitalize">
            {type}
          </Text>
        </VStack>
      </HStack>

      {/* Pokémon Image */}
      <Box
        bg="white"
        borderRadius="md"
        overflow="hidden"
        mb={3}
        height="150px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={image}
          alt={name}
          objectFit="contain"
          maxH="100%"
          maxW="100%"
        />
      </Box>

      {/* Abilities */}
      <VStack align="start">
        {abilityNames.map((ability, idx) => (
          <Text key={idx} fontSize="sm" fontWeight="medium">
            {ability}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Card;
