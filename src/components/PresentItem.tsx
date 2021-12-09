import React, {useContext} from "react";
import {Flex, IconButton, Text} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";

import {PresentsContext} from "../contexts/PresentsProvider";

const PresentItem = ({name, quantity}: PresentT) => {
  const {removePresent} = useContext(PresentsContext);

  return (
    <Flex _hover={{bg: "whiteAlpha.200"}} align="center" as="article" my={2} px={2} rounded="sm">
      <Text as="h4" flex={3}>
        {name}
      </Text>
      <Text as="span" flex={1}>
        {quantity} ud.
      </Text>
      <IconButton
        _hover={{color: "red.700"}}
        aria-label="Remove this present"
        as={SmallCloseIcon}
        color="red.600"
        cursor="pointer"
        size="sm"
        variant="unstyled"
        onClick={() => removePresent(name)}
      />
    </Flex>
  );
};

export default PresentItem;
