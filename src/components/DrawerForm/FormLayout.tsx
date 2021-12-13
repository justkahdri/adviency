import React from "react";
import {Input, Stack, FormLabel, FormControl} from "@chakra-ui/react";

const FormLayout = ({handleSubmit, oldValues}: GiftFormProps) => {
  return (
    <Stack as="form" id="new-gift" spacing={5} onSubmit={handleSubmit}>
      <Stack direction={{base: "column", md: "row"}}>
        <FormControl isRequired>
          <FormLabel htmlFor="gift">Regalo: </FormLabel>
          <Input
            defaultValue={oldValues?.gift || ""}
            id="gift"
            name="gift"
            placeholder="Por favor ingrese un regalo"
          />
        </FormControl>
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
            defaultValue={oldValues?.url || ""}
            id="url"
            name="url"
            placeholder="https://example.com/some-image"
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
