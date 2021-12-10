import React, {MutableRefObject} from "react";
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

function DrawerForm() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef() as MutableRefObject<HTMLButtonElement>;
  const firstField = React.useRef() as MutableRefObject<HTMLInputElement>;

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

          <Stack as={DrawerBody} spacing={5}>
            <FormControl>
              <FormLabel htmlFor="gift">Regalo: </FormLabel>
              <Input ref={firstField} id="gift" placeholder="Por favor ingrese un regalo" />
            </FormControl>
            <Stack direction="row">
              <FormControl flex={2}>
                <FormLabel htmlFor="img">URL de Imagen: </FormLabel>
                <Input id="img" placeholder="https://example.com/some-image" />
              </FormControl>
              <FormControl flex={1}>
                <FormLabel htmlFor="quantity">Cantidad: </FormLabel>
                <Input id="quantity" placeholder="00" type="number" />
              </FormControl>
            </Stack>
          </Stack>

          <DrawerFooter>
            <Button colorScheme="yellow" mr={3} variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="yellow">Agregar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerForm;
