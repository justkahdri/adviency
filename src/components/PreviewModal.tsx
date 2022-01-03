import React from "react";
import {
  Button,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

import {useGifts} from "../contexts/GiftsProvider";

function PreviewModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {gifts} = useGifts();

  return (
    <>
      <Button onClick={onOpen}>❄️ Previsualizar ❄️</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Listado para Compras</ModalHeader>
          <ModalCloseButton
            sx={{
              "@media print": {
                visibility: "hidden",
              },
            }}
          />
          <ModalBody>
            <List spacing={2}>
              {Array.from(gifts.values()).map((gift) => (
                <ListItem key={gift.gift_id} justify="center">
                  <ListIcon as={ChevronRightIcon} color="purple" />
                  {/* <Image boxSize={6} display="inline" objectFit="cover" src={gift.img_src} /> */}
                  {gift.name} ({gift.quantity}),
                  <Text as="span" color="blackAlpha.600">
                    {" " + gift.receiver}
                  </Text>
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter
            sx={{
              "@media print": {
                visibility: "hidden",
              },
            }}
          >
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              colorScheme="purple"
              fontWeight={600}
              variant="ghost"
              onClick={() => window.print()}
            >
              Imprimir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PreviewModal;
