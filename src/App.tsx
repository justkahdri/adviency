import React from "react";
import {Box, Button, Flex, Heading, Link, Stack, Text} from "@chakra-ui/react";

import {NewGiftDrawer} from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import GiftsList from "./components/GiftsList";
import PreviewModal from "./components/PreviewModal";

export default function App() {
  const {gifts, removeAll} = useGifts();

  return (
    <Flex
      className="App"
      flexDir="column"
      minH="100vh"
      sx={{
        "@media print": {
          visibility: "hidden",
          display: "none",
        },
      }}
    >
      <Box
        as="header"
        bg="red.700"
        borderBottom="1px solid"
        borderColor="blackAlpha.400"
        color="white"
        minWidth="100%"
        p={2}
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
          <PreviewModal />
        </Stack>
        <GiftsList />
      </Stack>
      <Flex bg="green.800" color="white" fontSize={14} justify="center" py={2} width="100%">
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
