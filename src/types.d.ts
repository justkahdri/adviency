declare global {
  interface PresentT {
    name: string;
    quantity: number;
  }

  interface PresentsContextState {
    presents: PresentT[];
    addPresent: (present: PresentT) => void;
    removePresent: (presentName: string) => void;
    removeAll: VoidFunction;
  }
}

export {};
