import {FormEventHandler} from "react";

declare global {
  type GiftKey = "name" | "quantity" | "img_src" | "receiver";

  interface Gift {
    name: string;
    quantity: number;
    img_src: string;
    receiver: string;
  }

  interface HydratedGift extends Gift {
    remove: VoidFunction;
  }

  interface GiftsContextState {
    gifts: HydratedGift[];
    addGift: (gift: Gift) => void;
    updateGift: (giftName: string, new_values: Partial<Gift>) => void;
    removeGift: (giftName: string) => void;
    removeAll: VoidFunction;
  }

  interface GiftEventTarget extends EventTarget {
    gift: HTMLInputElement;
    quantity: HTMLInputElement;
    url: HTMLInputElement;
    receiver: HTMLInputElement;
  }

  interface DefaultValues {
    receiver: string;
    gift: string;
    url: string;
    quantity: number;
  }

  interface GiftFormProps {
    handleSubmit: FormEventHandler;
    oldValues?: DefaultValues;
  }
}

export {};
