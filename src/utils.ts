export const DEFAULT_GIFTS: Gift[] = [
  {
    name: "💍 Anillos de plata",
    quantity: 10,
    img_src:
      "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "✈️ Pasajes de avion",
    quantity: 3,
    img_src:
      "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const loadFromLocalStorage = () => {
  const localPresents = window.localStorage.getItem("gifts");

  if (localPresents) {
    return JSON.parse(localPresents) as HydratedGift[];
  } else {
    return DEFAULT_GIFTS;
  }
};
