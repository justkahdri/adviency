import React, {createContext, useState, useEffect, FC} from "react";

const loadFromLocalStorage = () => {
  const localPresents = window.localStorage.getItem("presents");

  if (localPresents) {
    return JSON.parse(localPresents) as PresentT[];
  } else {
    return [
      {name: "🧸 Juguetes", quantity: 2},
      {name: "🚁 Helicoptero", quantity: 5},
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

  const addPresent = ({name, quantity}: PresentT) => {
    const repeatedPresent = presents.find((p) => p.name === name);

    if (repeatedPresent) {
      const updatedPresent = {...repeatedPresent, quantity: quantity + repeatedPresent.quantity};

      setPresents(presents.map((p) => (p.name == name ? updatedPresent : p)));
    } else {
      setPresents((p) => [{name, quantity}, ...p]);
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
