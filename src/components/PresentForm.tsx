import React, {FormEventHandler, MutableRefObject, useContext, useRef} from "react";
import {Stack, FormControl, FormLabel, Input, IconButton} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

import {PresentsContext} from "../contexts/PresentsProvider";

const PresentForm = () => {
  const presentName = useRef() as MutableRefObject<HTMLInputElement>;
  const presentQuantity = useRef() as MutableRefObject<HTMLInputElement>;

  const {addPresent} = useContext(PresentsContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const name = presentName.current.value;
    const quantity = Number(presentQuantity.current.value);

    addPresent({name, quantity});
  };

  return (
    <Stack as="form" direction="row" onSubmit={handleSubmit}>
      <FormControl isRequired id="name">
        <FormLabel>Regalo</FormLabel>
        <Input ref={presentName} type="text" />
      </FormControl>
      <FormControl isRequired id="quantity" width="fit-content">
        <FormLabel>Cantidad</FormLabel>
        <Input ref={presentQuantity} type="number" />
      </FormControl>
      <IconButton
        alignSelf="end"
        aria-label="Agregar regalo"
        colorScheme="yellow"
        icon={<AddIcon />}
        type="submit"
      />
    </Stack>
  );
};

export default PresentForm;
