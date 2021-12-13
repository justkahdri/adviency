import React from "react";
import {Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";

import bg from "./back.jpg";
import {NewGiftDrawer} from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import GiftDisplay from "./components/GiftDisplay";

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
      <Stack align="center" backdropFilter="blur(5px)" bg="whiteAlpha.700" p={6} width="100%">
        <Heading as="h1">Regalos:</Heading>

        {gifts.length ? (
          <>
            {gifts.map((gift) => (
              <GiftDisplay key={gift.name} {...gift} />
            ))}
            <Stack direction="row">
              <Button colorScheme="red" variant="outline" onClick={removeAll}>
                Borrar todos los regalos 😥
              </Button>
              <NewGiftDrawer />
            </Stack>
          </>
        ) : (
          <Text>😔 No hay regalos! 😔</Text>
        )}
      </Stack>
    </Flex>
  );
}
