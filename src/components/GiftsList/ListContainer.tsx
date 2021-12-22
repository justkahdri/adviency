import React, {FC} from "react";
import {Stack, Text} from "@chakra-ui/react";

interface ListContainerProps {
  total?: number;
}

const ListContainer: FC<ListContainerProps> = ({children, total}) => (
  <Stack
    align="center"
    backdropFilter="blur(2px)"
    backgroundColor="whiteAlpha.800"
    py={12}
    width="100%"
  >
    {total ? (
      <>
        <Stack as="ul" spacing={2}>
          {children}
        </Stack>
        <Stack direction="row" justify="end" width="35%">
          <Text fontWeight="bold">Total:</Text>
          <Text color="green">${total.toLocaleString("es-AR")}</Text>
        </Stack>
      </>
    ) : (
      children
    )}
  </Stack>
);

export default ListContainer;
