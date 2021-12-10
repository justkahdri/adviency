import React from "react";
import {Flex, Heading, Stack} from "@chakra-ui/react";

import bg from "./back.jpg";
import DrawerForm from "./components/DrawerForm";

export default function App() {
  return (
    <Flex
      align="center"
      backgroundImage={bg}
      backgroundPosition="center -600px"
      backgroundRepeat="no-repeat"
      backgroundSize="fill"
      className="App"
      minH="100vh"
    >
      <Stack align="center" bg="whiteAlpha.800" p={6} width="100%">
        <Heading as="h1">Regalos:</Heading>

        <DrawerForm />
      </Stack>
    </Flex>
  );
}
