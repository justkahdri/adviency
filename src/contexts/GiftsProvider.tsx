import React, {createContext, useState, useEffect, FC, useContext} from "react";
import {nanoid} from "nanoid";

import {mockApi, filterGiftsWithMap} from "../utils";

const contextDefaultValues: GiftsContextState = {
  gifts: new Map(),
  loading: false,
  error: null,
  addGift: () => {},
  removeGift: () => {},
  removeAll: () => {},
  updateGift: () => {},
};

export const GiftsContext = createContext<GiftsContextState>(contextDefaultValues);

const GiftsProvider: FC = ({children}) => {
  const [gifts, setGifts] = useState<GiftsMap>(contextDefaultValues.gifts);
  const [loading, setLoading] = useState(contextDefaultValues.loading);
  const [error, setError] = useState(contextDefaultValues.error);

  useEffect(() => {
    setLoading(true);
    mockApi.gifts
      .list()
      .then((response) => setGifts(filterGiftsWithMap(response)))
      .then(() => {
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
    //   window.localStorage.setItem("gifts", JSON.stringify(gifts));
  }, []);

  const addGift = (newGift: NewGift) => {
    const newId = nanoid();

    setGifts((gifts) => new Map(gifts.set(newId, {gift_id: newId, ...newGift})));
  };

  const updateGift = (giftId: string, new_values: Partial<Gift>) => {
    setGifts((gifts) => {
      const old_values = gifts.get(giftId);

      if (!old_values) {
        throw new Error(`Gift Id not found in gifts: ${giftId}`);
      }

      return new Map(gifts.set(giftId, {...old_values, ...new_values}));
    });
  };

  const removeGift = (giftId: string) =>
    setGifts((gifts) => {
      gifts.delete(giftId);

      return new Map(gifts);
    });

  const removeAll = () => setGifts(new Map());

  return (
    <GiftsContext.Provider
      value={{
        gifts,
        error,
        loading,
        addGift,
        removeGift,
        removeAll,
        updateGift,
      }}
    >
      {children}
    </GiftsContext.Provider>
  );
};

export default GiftsProvider;

export const useGifts = () => useContext(GiftsContext);
