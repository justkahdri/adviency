import React, {useRef, MutableRefObject} from "react";
import {
  Avatar,
  Collapse,
  Flex,
  IconButton,
  Image,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import {ChevronDownIcon, DeleteIcon} from "@chakra-ui/icons";

import {DuplicateGiftDrawer, EditGiftDrawer} from "../DrawerForm";

const GiftDisplay = (props: HydratedGift) => {
  const {cost, name, img_src, quantity, receiver, remove} = props;
  const focusAfterEdit = useRef() as MutableRefObject<HTMLElement>;
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Stack
      // @ts-ignore
      ref={focusAfterEdit}
      _hover={{bg: "blackAlpha.200"}}
      as="li"
      position="relative"
      px={2}
      rounded="sm"
      width="90vw"
    >
      <Stack align="center" direction="row" flexWrap="wrap" width="100%">
        <Avatar
          aria-label={`Mostrar imagen de ${name}`}
          name={name}
          size="sm"
          src={img_src}
          tabIndex={0}
        />
        <Stack align="center" direction="row" flex={10}>
          <Text as="h3">{name}</Text>
          <Text color="gray.500" fontSize="sm">
            - {receiver}
          </Text>
        </Stack>

        <Text flex={3}>{quantity} ud.</Text>

        <Stack direction="row" flex={5}>
          <Text>{`$${(cost * quantity).toLocaleString("es-AR")} `}</Text>
          {cost * quantity !== cost && (
            <Text as="span" color="gray.500">
              (${cost.toLocaleString("es-AR")} c/u)
            </Text>
          )}
        </Stack>

        <IconButton
          aria-label="See details"
          icon={<ChevronDownIcon />}
          transform={isOpen ? "rotate(180deg)" : ""}
          variant="link"
          onClick={onToggle}
        />
      </Stack>
      <Collapse animateOpacity in={isOpen}>
        <Stack direction="row" divider={<StackDivider borderColor="blue.500" />} px={12}>
          <Stack>
            <UnorderedList>
              <ListItem>
                {"Precio por unidad: "}
                <Text as="span" color="red.600">
                  ${cost.toLocaleString("es-AR")}
                </Text>
              </ListItem>

              <Flex>
                <DuplicateGiftDrawer finalRef={focusAfterEdit} name={name} oldValues={props} />
                <EditGiftDrawer finalRef={focusAfterEdit} name={name} oldValues={props} />
                <IconButton
                  aria-label={`Eliminar ${name}`}
                  colorScheme="red"
                  icon={<DeleteIcon />}
                  variant="link"
                  onClick={remove}
                />
              </Flex>
            </UnorderedList>
          </Stack>
          <Image
            alt={name}
            fallbackSrc="https://images.unsplash.com/photo-1545470941-1630430ba8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            flex={1}
            h="35vh"
            maxH="300px"
            objectFit="cover"
            src={img_src}
          />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default GiftDisplay;
