import React, {FC} from "react";
import {Stack, Skeleton, Heading, Text} from "@chakra-ui/react";

import {useGifts} from "../../contexts/GiftsProvider";

import GiftDisplay from "./GiftDisplay";

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

const GiftsList = () => {
  const {gifts, loading, error, removeGift} = useGifts();

  if (error)
    return (
      <Heading
        bg="whiteAlpha.900"
        border="2px groove yellow"
        fontWeight={400}
        p={6}
        rounded="md"
        size="2xl"
      >
        😨 ¡Ocurri&oacute; un error al traer los regalos! 😱
      </Heading>
    );

  if (loading)
    return (
      <ListContainer>
        {Array(5)
          .fill("")
          .map((_, idx) => (
            <Skeleton key={idx}>
              <GiftDisplay
                cost={1}
                gift_id={_}
                img_src={_}
                name={_}
                quantity={1}
                receiver={_}
                remove={() => {}}
              />
            </Skeleton>
          ))}
      </ListContainer>
    );

  return (
    <ListContainer
      total={Array.from(gifts.values()).reduce(
        (total, gift) => total + gift.quantity * gift.cost,
        0,
      )}
    >
      {gifts.size ? (
        Array.from(gifts.entries()).map(([id, gift]) => (
          <GiftDisplay key={id} {...gift} remove={() => removeGift(id)} />
        ))
      ) : (
        <Heading>No hay m&aacute;s regalos! Agrega uno!</Heading>
      )}
    </ListContainer>
  );
};

export default GiftsList;
