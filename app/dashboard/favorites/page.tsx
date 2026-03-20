'use client'

import FavPokemonCard from "@/components/dashboard/FavPokemonCard"
import { useFavPokemonList } from "@/store"

export default function Favorites(){
  const favorites = useFavPokemonList((state) => state.favorites)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {
        favorites.map((pokemon) => (
          <FavPokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
      }
    </div>
  )
}