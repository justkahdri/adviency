import React, {ReactNode} from "react";
import {SimpleGrid, Stack, Text} from "@chakra-ui/react";

interface ListContainerProps {
  total?: number;
  children: ReactNode;
}

const ListContainer = ({children, total}: ListContainerProps) => (
  <Stack
    align="center"
    backdropFilter="blur(2px)"
    backgroundColor="whiteAlpha.800"
    py={12}
    width="100%"
  >
    {total ? (
      <>
        <SimpleGrid columns={{base: 1, sm: 2, md: 3, lg: 4, xl: 6}} px={8} spacing={5}>
          {children}
        </SimpleGrid>
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
