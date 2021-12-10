import React, {useContext, useState} from "react";
import {Stack, IconButton, Text, Avatar, Image} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";

import {PresentsContext} from "../contexts/PresentsProvider";

const PresentItem = ({name, quantity, img}: PresentT) => {
  const {removePresent} = useContext(PresentsContext);
  const [visible, setVisible] = useState(false);
  let hoverTimer: any;

  const handleHover = (hover: boolean) => {
    if (hover) {
      hoverTimer = setTimeout(() => setVisible(true), 1000);
    } else {
      clearTimeout(hoverTimer);
      setVisible(false);
    }
  };

  return (
    <Stack
      _hover={{bg: "whiteAlpha.200"}}
      align="center"
      as="article"
      direction="row"
      my={2}
      position="relative"
      px={2}
      rounded="sm"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Avatar name={name} size="sm" src={img} />
      <Text as="h4" flex={3}>
        {name}
      </Text>
      <Text as="span" flex={1}>
        {quantity} ud.
      </Text>
      <IconButton
        _hover={{color: "red.700"}}
        aria-label="Remove this present"
        as={SmallCloseIcon}
        color="red.600"
        cursor="pointer"
        size="sm"
        variant="unstyled"
        onClick={() => removePresent(name)}
      />
      <Image
        alt={name}
        display={visible ? "block" : "none"}
        fallbackSrc="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        h="30vh"
        left={-2}
        minH="208px"
        objectFit="cover"
        position="absolute"
        src={img}
        top={10}
        w="100%"
        zIndex={2}
      />
    </Stack>
  );
};

export default PresentItem;
