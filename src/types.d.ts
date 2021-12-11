declare global {
  interface Gift {
    name: string;
    quantity: number;
    img_src: string;
  }

  interface HydratedGift extends Gift {
    remove: VoidFunction;
  }

  interface GiftsContextState {
    gifts: HydratedGift[];
    addGift: (gift: Gift) => void;
    removeGift: (giftName: string) => void;
    removeAll: VoidFunction;
  }

  interface GiftEventTarget extends EventTarget {
    gift: HTMLInputElement;
    quantity: HTMLInputElement;
    url: HTMLInputElement;
  }
}

export {};
