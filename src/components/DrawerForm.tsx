import React, {FormEvent, MutableRefObject} from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  DrawerCloseButton,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import {useGifts} from "../contexts/GiftsProvider";

function DrawerForm() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef() as MutableRefObject<HTMLButtonElement>;
  const {addGift} = useGifts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as GiftEventTarget;

    addGift({
      name: target.gift.value,
      quantity: Number(target.quantity.value),
      img_src: target.url.value,
    });

    target.url.value = target.quantity.value = target.gift.value = "";
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="yellow" onClick={onOpen}>
        Agregar un regalo
      </Button>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Agregar un Regalo</DrawerHeader>

          <DrawerBody>
            <Stack as="form" id="new-gift" spacing={5} onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="gift">Regalo: </FormLabel>
                <Input id="gift" name="gift" placeholder="Por favor ingrese un regalo" />
              </FormControl>
              <Stack direction="row">
                <FormControl isRequired flex={2}>
                  <FormLabel htmlFor="url">URL de Imagen: </FormLabel>
                  <Input id="url" name="url" placeholder="https://example.com/some-image" />
                </FormControl>
                <FormControl isRequired flex={1}>
                  <FormLabel htmlFor="quantity">Cantidad: </FormLabel>
                  <Input id="quantity" name="quantity" placeholder="00" type="number" />
                </FormControl>
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="yellow" mr={3} variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="yellow" form="new-gift" type="submit">
              Agregar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerForm;
