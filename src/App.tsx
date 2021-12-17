import React from "react";
import {Box, Button, Flex, Heading, Link, Skeleton, Stack, Text} from "@chakra-ui/react";

import {NewGiftDrawer} from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import GiftDisplay from "./components/GiftDisplay";

export default function App() {
  const {gifts, removeAll, removeGift} = useGifts();

  return (
    <Flex className="App" flexDir="column" minH="100vh">
      <Box
        as="header"
        bg="red.700"
        borderBottom="1px solid"
        borderColor="blackAlpha.400"
        color="white"
        p={2}
        width="100%"
      >
        <Heading as="h1">Regalos de Adviency</Heading>
      </Box>
      <Stack
        align="center"
        as="main"
        backgroundImage="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flex={1}
        py={6}
        spacing={6}
        width="100%"
      >
        <Stack
          backdropFilter="blur(5px)"
          backgroundColor="whiteAlpha.200"
          border="1px groove crimson"
          direction="row"
          p={6}
          rounded="md"
        >
          {gifts.size && (
            <Button colorScheme="red" variant="solid" onClick={removeAll}>
              Borrar todos los regalos 😥
            </Button>
          )}
          <NewGiftDrawer />
        </Stack>
        <Stack
          align="center"
          as="section"
          backdropFilter="blur(2px)"
          backgroundColor="whiteAlpha.800"
          py={12}
          width="100%"
        >
          {gifts.size
            ? Array.from(gifts.entries()).map(([id, gift]) => (
                <GiftDisplay key={id} {...gift} remove={() => removeGift(id)} />
              ))
            : Array(5)
                .fill("")
                .map((_, idx) => <Skeleton key={idx} height="32px" width="80%" />)}
        </Stack>
      </Stack>
      <Flex bg="green.800" color="white" justify="center" py={2} width="100%">
        <Text>
          {"Hecho con 🧡 por "}
          <Link isExternal color="gold" href="https://github.com/justkahdri">
            JustKahdri
          </Link>
          {" 🎅 " + new Date().getFullYear()}
        </Text>
      </Flex>
    </Flex>
  );
}
