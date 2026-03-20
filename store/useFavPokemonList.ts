import { create } from 'zustand';
import type { FavPokemon } from '@/types/pokeTypes';

interface FavPokemonStore {
  favorites: FavPokemon[];
  addPokemon: (name: string, imageUrl: string) => void;
  removePokemon: (id: string) => void;
  isFavorite: (name: string) => boolean;
}

export const useFavPokemonList = create<FavPokemonStore>((set, get) => ({
  favorites: [],
  addPokemon: (name: string, imageUrl: string) => {
    const { favorites } = get();
    if (favorites.some((p) => p.name === name)) return;
    set({ favorites: [...favorites, { id: crypto.randomUUID(), name, imageUrl }] });
  },
  removePokemon: (id: string) => {
    set({ favorites: get().favorites.filter((p) => p.id !== id) });
  },
  isFavorite: (name: string) => {
    return get().favorites.some((p) => p.name === name);
  },
}));