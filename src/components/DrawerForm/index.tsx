import React, {FormEvent, MutableRefObject, RefObject} from "react";
import {Button, useDisclosure} from "@chakra-ui/react";

import {useGifts} from "../../contexts/GiftsProvider";

import CustomDrawer from "./CustomDrawer";

interface EditGiftProps {
  isOpen: boolean;
  onClose: VoidFunction;
  oldValues: Gift;
  finalRef: RefObject<any>;
}

export const EditGiftDrawer = ({isOpen, onClose, oldValues, finalRef}: EditGiftProps) => {
  const {updateGift} = useGifts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as GiftEventTarget;

    updateGift(oldValues.gift_id, {
      name: target.gift.value,
      quantity: Number(target.quantity.value),
      img_src: target.url.value,
      receiver: target.receiver.value,
    });

    onClose();
  };

  return (
    <CustomDrawer
      finalFocusRef={finalRef}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      oldValues={oldValues}
      submitMessage="Guardar cambios"
      onClose={onClose}
    >
      Modificar un Regalo
    </CustomDrawer>
  );
};

export const NewGiftDrawer = () => {
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
      receiver: target.receiver.value,
    });

    target.url.value = target.quantity.value = target.gift.value = target.receiver.value = "";
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="yellow" onClick={onOpen}>
        Agregar un regalo
      </Button>
      <CustomDrawer
        finalFocusRef={btnRef}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        submitMessage="Agregar"
        onClose={onClose}
      >
        Agregar un Regalo
      </CustomDrawer>
    </>
  );
};
