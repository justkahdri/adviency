import React, {createContext, useState, useEffect, FC, useContext} from "react";

import {loadFromLocalStorage} from "../utils";

const contextDefaultValues: GiftsContextState = {
  gifts: [],
  addGift: () => {},
  removeGift: () => {},
  removeAll: () => {},
};

export const GiftsContext = createContext<GiftsContextState>(contextDefaultValues);

const GiftsProvider: FC = ({children}) => {
  const [gifts, setGifts] = useState<HydratedGift[]>(
    loadFromLocalStorage().map((gift) => ({...gift, remove: () => removeGift(gift.name)})),
  );

  useEffect(() => {
    window.localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

  const removeGift = (giftName: string) =>
    setGifts((gifts) => gifts.filter((g) => g.name !== giftName));

  const addGift = (newGift: Gift) => {
    setGifts((gifts) => [
      ...gifts,
      {
        ...newGift,
        remove: () => removeGift(newGift.name),
      },
    ]);
  };

  const removeAll = () => setGifts([]);

  return (
    <GiftsContext.Provider
      value={{
        gifts,
        addGift,
        removeGift,
        removeAll,
      }}
    >
      {children}
    </GiftsContext.Provider>
  );
};

export default GiftsProvider;

export const useGifts = () => useContext(GiftsContext);
