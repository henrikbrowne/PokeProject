import { useState, useMemo, useEffect } from "react";
import { useGetAllPokemonNamesQuery } from "../services/pokemon";
import PokemonPreview from "../components/PokemonPreview/PokemonPreview";
import { Box, Flex, Button, HStack, Text } from "@chakra-ui/react";
import pokedex from "../assets/pokedex.png";

const PAGE_SIZE = 3;

const OverviewPage = () => {
  const { data, error, isLoading } = useGetAllPokemonNamesQuery();
  const [page, setPage] = useState(0);

  const results = data?.results ?? [];
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));

  // Keep page index in range when data changes
  useEffect(() => {
    if (page > totalPages - 1) setPage(totalPages - 1);
  }, [totalPages, page]);

  const pageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return results.slice(start, start + PAGE_SIZE);
  }, [results, page]);

  if (isLoading) return <p>Loading Pokémons...</p>;
  if (error) return <p>Oh no, something went wrong!</p>;
  if (!results.length) return <p>No Pokémon found.</p>;

  const onPrev = () => setPage((p) => Math.max(0, p - 1));
  const onNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <>
      <Flex
        backgroundImage={`url(${pokedex})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        height="100vh"
        width="100vw"
        backgroundPosition="center"
        display="flex"
      >
        <Box
          maxWidth="50rem"
          position="absolute"
          top="305px"
          left="638px"
        >
          <Box
            maxHeight="17rem"
            overflowY="auto"
            pr={2}
          >
            {pageItems.map((pokemon) => (
              <PokemonPreview key={pokemon.name} pokemonName={pokemon.name} />
            ))}
          </Box>

          <HStack justify="space-between" align="center" mt={4}>
            <Button onClick={onPrev} disabled={page === 0}>
              Previous
            </Button>
            <Text fontSize="sm">
              Page {page + 1} / {totalPages}
            </Text>
            <Button onClick={onNext} disabled={page >= totalPages - 1}>
              Next
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default OverviewPage;
