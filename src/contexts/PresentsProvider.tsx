import React, {createContext, useState, useEffect, FC} from "react";

const loadFromLocalStorage = () => {
  const localPresents = window.localStorage.getItem("presents");

  if (localPresents) {
    return JSON.parse(localPresents) as PresentT[];
  } else {
    return [
      {
        name: "🧸 Juguetes",
        quantity: 2,
        img: "https://images.unsplash.com/photo-1581312742770-ce89199554af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "🍫 Chocolates",
        quantity: 5,
        img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      },
    ];
  }
};

const contextDefaultValues: PresentsContextState = {
  presents: loadFromLocalStorage(),
  addPresent: () => {},
  removePresent: () => {},
  removeAll: () => {},
};

export const PresentsContext = createContext<PresentsContextState>(contextDefaultValues);

const PresentsProvider: FC = ({children}) => {
  const [presents, setPresents] = useState<PresentT[]>(contextDefaultValues.presents);

  useEffect(() => {
    window.localStorage.setItem("presents", JSON.stringify(presents));
  }, [presents]);

  const addPresent = ({name, quantity, img}: PresentT) => {
    const repeatedPresent = presents.find((p) => p.name === name);

    if (repeatedPresent) {
      const updatedPresent = {...repeatedPresent, quantity: quantity + repeatedPresent.quantity};

      setPresents(presents.map((p) => (p.name == name ? updatedPresent : p)));
    } else {
      setPresents((p) => [{name, quantity, img}, ...p]);
    }
  };

  const removePresent = (presentName: string) =>
    setPresents(presents.filter((p) => p.name !== presentName));

  const removeAll = () => setPresents([]);

  return (
    <PresentsContext.Provider
      value={{
        presents,
        addPresent,
        removePresent,
        removeAll,
      }}
    >
      {children}
    </PresentsContext.Provider>
  );
};

export default PresentsProvider;
