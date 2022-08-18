import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import ToggleColorMode from "./components/ToggleColorMode";

function HomePage() {
  return (
    <Container maxW={"5xl"}>
      <ToggleColorMode />
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"orange.400"}>
            Cheq
          </Text>{" "}
          Protocol
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Cheq is a decentralized payments protocol for reversible, tradable
          transactions that powers deNota.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button px={6}>
            Contact us
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}

export default HomePage;
