import React, {useState, useRef, MutableRefObject} from "react";
import {Avatar, IconButton, Image, Stack, Text, useDisclosure} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

import {EditGiftDrawer} from "../DrawerForm";

const GiftDisplay = ({gift_id, name, img_src, quantity, receiver, remove}: HydratedGift) => {
  const [visible, setVisible] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  let hoverTimer: NodeJS.Timeout;
  const focusAfterEdit = useRef() as MutableRefObject<HTMLDivElement>;

  const handleHover = (hover: boolean) => {
    if (hover) {
      hoverTimer = setTimeout(() => setVisible(true), 2000);
    } else {
      clearTimeout(hoverTimer);
      setVisible(false);
    }
  };

  return (
    <Stack
      ref={focusAfterEdit}
      _hover={{bg: "blackAlpha.200"}}
      align="center"
      direction="row"
      position="relative"
      px={2}
      rounded="sm"
      width="80vw"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Avatar
        _before={!visible ? {content: "'🔍'", right: 5, top: 4, position: "absolute"} : {}}
        aria-label={`Mostrar imagen de ${name}`}
        cursor="pointer"
        name={name}
        size="sm"
        src={img_src}
        tabIndex={0}
        onBlur={() => setVisible(false)}
        // onClick={() => setVisible((v) => !v)}
        onFocus={() => setVisible(true)}
      />
      <Stack align="center" direction="row" flex={3}>
        <Text as="h3">{name}</Text>
        <Text color="gray.500" fontSize="sm">
          - {receiver}
        </Text>
      </Stack>

      <Text flex={1}>{quantity} ud.</Text>

      <IconButton
        aria-label={`Editar ${name}`}
        colorScheme="blue"
        icon={<EditIcon />}
        variant="link"
        onClick={onOpen}
      />
      <IconButton
        aria-label={`Eliminar ${name}`}
        colorScheme="red"
        icon={<DeleteIcon />}
        variant="link"
        onClick={remove}
      />
      <EditGiftDrawer
        finalRef={focusAfterEdit}
        isOpen={isOpen}
        oldValues={{name, quantity, img_src, receiver, gift_id}}
        onClose={onClose}
      />

      <Image
        alt={name}
        display={visible ? "block" : "none"}
        fallbackSrc="https://images.unsplash.com/photo-1545470941-1630430ba8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        h="35vh"
        left={-2}
        maxH="300px"
        objectFit="cover"
        position="absolute"
        pt={4}
        src={img_src}
        top={8}
        w="100%"
        zIndex={2}
      />
    </Stack>
  );
};

export default GiftDisplay;