import "@fontsource/mountains-of-christmas/700.css";
import "@fontsource/open-sans/400.css";
import React, {useContext} from "react";
import {Button, ChakraProvider} from "@chakra-ui/react";
import {Stack, Flex, Heading, Text} from "@chakra-ui/react";

import theme from "./theme";
import {PresentForm, PresentItem} from "./components";
import bg from "./background.jpg";
import PresentsProvider, {PresentsContext} from "./contexts/PresentsProvider";

const App = () => {
  const {presents, removeAll} = useContext(PresentsContext);

  return (
    <Flex
      align="center"
      as="main"
      backgroundImage={bg}
      backgroundRepeat="noRepeat"
      backgroundSize="cover"
      className="App"
      justify="center"
      minH="100vh"
    >
      <Stack
        backdropFilter="blur(5px)"
        bg="blackAlpha.700"
        border="2px solid"
        borderColor="green.500"
        color="white"
        mb={24}
        p={6}
        rounded="md"
        spacing={12}
      >
        <Heading as="h1" color="yellow.300" size="2xl">
          Regalos:
        </Heading>
        <PresentForm />
        {presents.length ? (
          <section>
            {presents.map((present) => (
              <PresentItem key={present.name} {...present} />
            ))}
          </section>
        ) : (
          <Text alignSelf="center" as="span">
            No hay más regalos. 😥
          </Text>
        )}
        <Button colorScheme="red" onClick={removeAll}>
          Borrar todos los regalos 😯
        </Button>
      </Stack>
    </Flex>
  );
};

export default function Wrapped() {
  return (
    <ChakraProvider theme={theme}>
      <PresentsProvider>
        <App />
      </PresentsProvider>
    </ChakraProvider>
  );
}
