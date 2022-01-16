import React, {useRef, MutableRefObject} from "react";
import {
  Avatar,
  IconButton,
  Image,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";

import {DuplicateGiftDrawer, EditGiftDrawer} from "../DrawerForm";

const GiftDisplay = (props: HydratedGift) => {
  const {cost, name, img_src, quantity, receiver, remove} = props;
  const focusAfterEdit = useRef() as MutableRefObject<HTMLElement>;

  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Stack
          // @ts-ignore
          ref={focusAfterEdit}
          _hover={{bg: "blackAlpha.200"}}
          align="center"
          cursor="pointer"
          data-testid="gift-item"
          direction="row"
          px={2}
          width="100%"
          wrap="nowrap"
        >
          <Avatar className="gift-preview" name={name} size="sm" src={img_src} tabIndex={0} />

          <Tooltip label={name}>
            <Text isTruncated as="h3">
              {name}
            </Text>
          </Tooltip>
          <Text as="i" color="gray.500" fontSize="sm" whiteSpace="nowrap">
            - {receiver}
          </Text>
        </Stack>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody className="details" maxH={200}>
            <UnorderedList>
              <ListItem>Cantidad: {quantity} ud.</ListItem>

              <ListItem>
                <Stack direction="row">
                  <Text>Precio: {`$${(cost * quantity).toLocaleString("es-AR")} `}</Text>
                  {cost * quantity !== cost && (
                    <Text as="span" color="gray.500">
                      (${cost.toLocaleString("es-AR")} c/u)
                    </Text>
                  )}
                </Stack>
              </ListItem>
            </UnorderedList>
            <Image
              alt={name}
              fallbackSrc="https://images.unsplash.com/photo-1545470941-1630430ba8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              flex={1}
              height={100}
              objectFit="cover"
              src={img_src}
              width="fill-available"
              zIndex={4}
            />
          </PopoverBody>
          <PopoverFooter
            alignItems="center"
            d="flex"
            data-testid="gift-buttons"
            justifyContent="space-evenly"
          >
            <DuplicateGiftDrawer finalRef={focusAfterEdit} name={name} oldValues={props} />
            <EditGiftDrawer finalRef={focusAfterEdit} name={name} oldValues={props} />
            <IconButton
              aria-label={`Eliminar ${name}`}
              colorScheme="red"
              icon={<DeleteIcon />}
              variant="link"
              onClick={remove}
            />
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default GiftDisplay;
