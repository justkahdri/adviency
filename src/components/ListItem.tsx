import React, {useState} from "react";
import {Avatar, AvatarProps, CloseButton, Image, Stack, Text} from "@chakra-ui/react";

const ListItem = ({name, img_src, quantity, receiver, remove}: HydratedGift) => {
  return (
    <Stack
      _hover={{bg: "blackAlpha.200"}}
      align="center"
      direction="row"
      position="relative"
      px={2}
      rounded="sm"
      width="80%"
    >
      <DisplayableImage name={name} size="sm" src={img_src} />
      <Stack align="center" direction="row" flex={3}>
        <Text as="h3">{name}</Text>
        <Text as="span" color="gray.500" fontSize="sm">
          - {receiver}
        </Text>
      </Stack>

      <Text flex={1}>{quantity} ud.</Text>

      <CloseButton color="green.500" onClick={remove} />
    </Stack>
  );
};

const DisplayableImage = (props: AvatarProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Avatar
        {...props}
        _before={{content: visible ? "'❌'" : "'🔍'", right: 5, top: 4, position: "absolute"}}
        cursor="pointer"
        onClick={() => setVisible((v) => !v)}
      />
      <Image
        alt={props.name}
        cursor="pointer"
        display={visible ? "block" : "none"}
        fallbackSrc="https://images.unsplash.com/photo-1545470941-1630430ba8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        h="35vh"
        left={-2}
        maxH="300px"
        objectFit="cover"
        position="absolute"
        src={props.src}
        top={12}
        w="100%"
        zIndex={2}
        onClick={() => setVisible(false)}
      />
    </>
  );
};

export default ListItem;
