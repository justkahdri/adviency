import React from "react";
import {Button, Flex, Heading, Link, Stack, Text, useBreakpointValue} from "@chakra-ui/react";

import {NewGiftDrawer} from "./components/DrawerForm";
import {useGifts} from "./contexts/GiftsProvider";
import GiftsList from "./components/GiftsList";
import PreviewModal from "./components/PreviewModal";
import Player from "./components/Player";
import SnowAnimation from "./components/SnowAnimation";

export default function App() {
  const {gifts, removeAll} = useGifts();
  const title = useBreakpointValue({base: "Adviency", md: "❄ Regalos de Adviency ❄"});

  return (
    <Flex
      className="App"
      flexDir="column"
      minH="100vh"
      minW="fit-content"
      sx={{
        "@media print": {
          visibility: "hidden",
          display: "none",
        },
      }}
    >
      <SnowAnimation particles={150} />
      <Flex
        as="header"
        bg="red.700"
        borderBottom="2px solid"
        borderColor="whiteAlpha.300"
        color="white"
        direction={{base: "column", sm: "row"}}
        justify="space-between"
        px={6}
        py={2}
        width="100%"
      >
        <Heading as="h1" lineHeight="lg">
          {title}
        </Heading>
        <Stack direction="row">
          <NewGiftDrawer />
          <Player url="./christmas_music.mp3" />
        </Stack>
      </Flex>

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
        <GiftsList />
        <Stack
          backdropFilter="blur(5px)"
          backgroundColor="whiteAlpha.200"
          border="1px groove crimson"
          direction={{base: "column", sm: "row"}}
          p={6}
          rounded="md"
        >
          {gifts.size && (
            <Button colorScheme="red" id="remove-all" variant="solid" onClick={removeAll}>
              Borrar todos los regalos 😥
            </Button>
          )}
          <PreviewModal />
        </Stack>
      </Stack>

      <Flex
        as="footer"
        bg="green.800"
        color="white"
        fontSize={14}
        justify="center"
        py={2}
        width="100%"
      >
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
