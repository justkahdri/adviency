import React, {FormEventHandler} from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  DrawerProps,
} from "@chakra-ui/react";

import FormLayout from "./FormLayout";

interface Props extends DrawerProps, GiftFormProps {
  submitMessage: string;
  handleSubmit: FormEventHandler;
}

const CustomDrawer = ({submitMessage, handleSubmit, oldValues, children, ...rest}: Props) => (
  <Drawer placement="bottom" {...rest}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>{children}</DrawerHeader>

      <DrawerBody>
        <FormLayout handleSubmit={handleSubmit} oldValues={oldValues} />
      </DrawerBody>

      <DrawerFooter>
        <Button colorScheme="grey" mr={3} variant="outline" onClick={rest.onClose}>
          Cancelar
        </Button>
        <Button colorScheme="green" form="new-gift" type="submit">
          {submitMessage}
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default CustomDrawer;
