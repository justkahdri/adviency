import React, {FormEvent, MutableRefObject, RefObject, useRef} from "react";
import {Button, IconButton, useDisclosure} from "@chakra-ui/react";
import {EditIcon, CopyIcon} from "@chakra-ui/icons";

import {useGifts} from "../../contexts/GiftsProvider";

import CustomDrawer from "./CustomDrawer";

interface EditGiftProps {
  oldValues: Gift;
  finalRef: RefObject<any>;
  name: string;
}

export const EditGiftDrawer = ({name, oldValues, finalRef}: EditGiftProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {updateGift} = useGifts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as GiftEventTarget;

    updateGift(oldValues.gift_id, {
      name: target.gift.value,
      quantity: Number(target.quantity.value),
      img_src: target.url.value,
      receiver: target.receiver.value,
      cost: Number(target.cost.value),
    });

    onClose();
  };

  return (
    <>
      <IconButton
        aria-label={`Editar ${name}`}
        colorScheme="blue"
        icon={<EditIcon />}
        variant="link"
        onClick={onOpen}
      />
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
    </>
  );
};

export const DuplicateGiftDrawer = ({name, oldValues, finalRef}: EditGiftProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {addGift} = useGifts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as GiftEventTarget;

    addGift({
      name: target.gift.value,
      quantity: Number(target.quantity.value),
      img_src: target.url.value,
      receiver: target.receiver.value,
      cost: Number(target.cost.value),
    });

    target.url.value = target.quantity.value = target.gift.value = target.receiver.value = "";
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label={`Duplicar ${name}`}
        colorScheme="purple"
        icon={<CopyIcon />}
        variant="link"
        onClick={onOpen}
      />
      <CustomDrawer
        finalFocusRef={finalRef}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        oldValues={oldValues}
        submitMessage="Agregar"
        onClose={onClose}
      >
        Duplicar un Regalo
      </CustomDrawer>
    </>
  );
};

export const NewGiftDrawer = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const {addGift} = useGifts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as GiftEventTarget;

    addGift({
      name: target.gift.value,
      quantity: Number(target.quantity.value),
      img_src: target.url.value,
      receiver: target.receiver.value,
      cost: Number(target.cost.value),
    });

    target.url.value = target.quantity.value = target.gift.value = target.receiver.value = "";
    onClose();
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="green" onClick={onOpen}>
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
