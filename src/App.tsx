import React from "react";
import {Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";

import bg from "./back.jpg";
import {NewGiftDrawer} from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import GiftDisplay from "./components/GiftDisplay";

export default function App() {
  const {gifts, removeAll, removeGift} = useGifts();

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

        {gifts.size ? (
          Array.from(gifts.entries()).map(([id, gift]) => (
            <GiftDisplay key={id} {...gift} remove={() => removeGift(id)} />
          ))
        ) : (
          <Text>Cargando...</Text>
        )}
        <Stack direction="row">
          {gifts.size && (
            <Button colorScheme="red" variant="outline" onClick={removeAll}>
              Borrar todos los regalos 😥
            </Button>
          )}
          <NewGiftDrawer />
        </Stack>
      </Stack>
    </Flex>
  );
}
