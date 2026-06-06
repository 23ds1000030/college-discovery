import { create } from "zustand";

type Store = {
  selected: any[];
  add: (c: any) => void;
  remove: (id: string) => void;
};

export const useCompareStore = create<Store>((set) => ({
  selected: [],
  add: (c) =>
    set((state) => ({
      selected: [...state.selected, c],
    })),
  remove: (id) =>
    set((state) => ({
      selected: state.selected.filter((c) => c.id !== id),
    })),
}));import { create } from "zustand";

type Store = {
  selected: any[];
  add: (c: any) => void;
  remove: (id: string) => void;
};

export const useCompareStore = create<Store>((set) => ({
  selected: [],
  add: (c) =>
    set((state) => ({
      selected: [...state.selected, c],
    })),
  remove: (id) =>
    set((state) => ({
      selected: state.selected.filter((c) => c.id !== id),
    })),
}));