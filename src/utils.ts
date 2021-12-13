export const DEFAULT_GIFTS: Gift[] = [
  {
    name: "☕ Tazón de Vercel",
    quantity: 2,
    img_src: "https://pbs.twimg.com/media/Ejce4ASVcAAeMJi?format=jpg&name=small",
    receiver: "Kahdri",
  },
  {
    name: "👕 Pijamas",
    quantity: 3,
    img_src: "https://pbs.twimg.com/media/EcROWAiWkAAmMub?format=jpg&name=large",
    receiver: "Goncy",
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
