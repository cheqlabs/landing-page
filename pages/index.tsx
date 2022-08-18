import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import lightLogo from "../public/cheq light logo chakra.png";
import darkLogo from "../public/cheq dark logo chakra.png";
import ToggleColorMode from "./components/ToggleColorMode";

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"5xl"}>
      <ToggleColorMode />
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        {colorMode === "light" ? (
          <Image
            src={lightLogo}
            alt="Cheq light logo"
            width={256}
            height={314}
          />
        ) : (
          <Image src={darkLogo} alt="Cheq dark logo" width={256} height={314} />
        )}
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Cheq Protocol
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Cheq is a decentralized payments protocol for reversible, tradable
          transactions that powers deNota.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button px={6}>Contact us</Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}

export default HomePage;
