import React from "react";
import {Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";

import bg from "./back.jpg";
import DrawerForm from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import ListItem from "./components/ListItem";

export default function App() {
  const {gifts, removeAll} = useGifts();

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
        {gifts.length ? (
          <>
            {gifts.map((gift) => (
              <ListItem key={gift.name} {...gift} />
            ))}
            <Button colorScheme="red" onClick={removeAll}>
              Borrar todos los regalos 😥
            </Button>
          </>
        ) : (
          <Text>😔 No hay regalos! 😔</Text>
        )}
      </Stack>
    </Flex>
  );
}
