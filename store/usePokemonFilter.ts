import { create } from "zustand";

interface PokemonFilterStore {
  filter: string;
  setFilter: (value: string) => void;
  resetFilter: () => void;
}

export const usePokemonFilter = create<PokemonFilterStore>((set) => ({
  filter: "",
  setFilter: (filter: string) => set(() => ({ filter: filter })),
  resetFilter: () => set(() => ({ filter: "" })),
}))