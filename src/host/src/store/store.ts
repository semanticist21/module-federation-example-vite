import { create } from "zustand";

interface IncrementStore {
  count: number;
  increment: () => void;
}

export const useIncrementStore = create<IncrementStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
