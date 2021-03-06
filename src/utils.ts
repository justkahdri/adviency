export const RANDOM_GIFTS = [
  "Mantecol",
  "Chocolate 🍫",
  "🍬 Caramelos",
  "Medias 🧦",
  "Taza tematica",
  "Pantalones 👖",
  "Vitel Tone",
  "Entradas para concierto 🎫🎫",
];

export const DEFAULT_GIFTS: Gift[] = [
  {
    gift_id: "muggy",
    name: "☕ Taza de Darth Vader",
    quantity: 2,
    img_src:
      "https://cdn.shopify.com/s/files/1/0306/8900/1517/products/BG_StarWars_5.jpg?v=1591026604",
    receiver: "Kahdri",
    cost: 620.5,
  },
  {
    gift_id: "goncypijamas",
    name: "👕 Pijamas",
    quantity: 3,
    img_src: "https://pbs.twimg.com/media/EcROWAiWkAAmMub?format=jpg&name=large",
    receiver: "Goncy",
    cost: 1560,
  },
  {
    gift_id: "choco",
    name: "Chocolates",
    quantity: 8,
    img_src:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80",
    receiver: "El Abuelo",
    cost: 400,
  },
];

export const mockApi = {
  gifts: {
    list: (): Promise<Gift[]> =>
      new Promise((res, _rej) => setTimeout(() => res(DEFAULT_GIFTS), Math.random() * 1000)),
  },
};

export const filterGiftsWithMap = (gifts: Gift[], map?: GiftsMap) => {
  let newMap = new Map(map || []);

  gifts.forEach((gift) => newMap.set(gift.gift_id, gift));

  return newMap;
};
