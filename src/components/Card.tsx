import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";

interface CardProps {
  name: string;
  hp: string;
  abilityNames: string[];
  color: string;
  type: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  name,
  hp,
  abilityNames,
  color,
  type,
  image,
}) => {
  return (
    <Box
      width="250px"
      height="350px"
      borderRadius="lg"
      overflow="hidden"
      bg={color}
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