import React, {MutableRefObject, useRef} from "react";
import {Input, Stack, FormLabel, FormControl, IconButton} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons";

import {RANDOM_GIFTS} from "../../utils";

const FormLayout = ({handleSubmit, oldValues}: GiftFormProps) => {
  const giftNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const generateRandomGift = () => {
    var ran_idx = Math.floor(Math.random() * RANDOM_GIFTS.length);

    giftNameRef.current.value = RANDOM_GIFTS[ran_idx];
  };

  return (
    <Stack as="form" id="new-gift" spacing={5} onSubmit={handleSubmit}>
      <Stack direction={{base: "column", md: "row"}}>
        <FormControl isRequired>
          <FormLabel htmlFor="gift">Regalo: </FormLabel>
          <Input
            ref={giftNameRef}
            defaultValue={oldValues?.name || ""}
            id="gift"
            name="gift"
            placeholder="Por favor ingrese un regalo"
          />
        </FormControl>
        <IconButton
          alignSelf="end"
          aria-label="Regalo aleatorio"
          colorScheme="green"
          icon={<RepeatIcon />}
          variant="outline"
          onClick={generateRandomGift}
        />
        <FormControl isRequired>
          <FormLabel htmlFor="receiver">Para: </FormLabel>
          <Input
            defaultValue={oldValues?.receiver || ""}
            id="receiver"
            name="receiver"
            placeholder="Kahdri"
          />
        </FormControl>
      </Stack>
      <Stack direction={{base: "column", md: "row"}}>
        <FormControl flex={2}>
          <FormLabel htmlFor="url">URL de Imagen: </FormLabel>
          <Input
            defaultValue={oldValues?.img_src || ""}
            id="url"
            name="url"
            placeholder="https://example.com/some-image"
          />
        </FormControl>
        <FormControl isRequired flex={1}>
          <FormLabel htmlFor="cost">Costo por unidad: </FormLabel>
          <Input
            defaultValue={oldValues?.cost || ""}
            id="cost"
            name="cost"
            placeholder="000.00"
            step={0.01}
            type="number"
          />
        </FormControl>
        <FormControl isRequired flex={1}>
          <FormLabel htmlFor="quantity">Cantidad: </FormLabel>
          <Input
            defaultValue={oldValues?.quantity || ""}
            id="quantity"
            name="quantity"
            placeholder="00"
            type="number"
          />
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default FormLayout;
