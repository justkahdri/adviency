import {FormEventHandler} from "react";

declare global {
  // type GiftKey = "name" | "quantity" | "img_src" | "receiver";

  interface NewGift {
    name: string;
    quantity: number;
    img_src: string;
    receiver: string;
  }

  interface Gift extends NewGift {
    gift_id: string;
  }

  type GiftsMap = Map<string, Gift>;

  interface HydratedGift extends Gift {
    remove: VoidFunction;
  }

  interface GiftsContextState {
    gifts: Map<string, Gift>;
    addGift: (new_gift: NewGift) => void;
    updateGift: (giftId: string, new_values: Partial<Gift>) => void;
    removeGift: (giftId: string) => void;
    removeAll: VoidFunction;
  }

  interface GiftEventTarget extends EventTarget {
    gift: HTMLInputElement;
    quantity: HTMLInputElement;
    url: HTMLInputElement;
    receiver: HTMLInputElement;
  }

  interface GiftFormProps {
    handleSubmit: FormEventHandler;
    oldValues?: Gift;
  }
}

export {};
