'use client'

import { capitalize } from "@/lib/capitalize"
import { useFavPokemonList } from "@/store"
import { HeartOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Favorites(){
  const favorites = useFavPokemonList((state) => state.favorites)
  const removePokemon = useFavPokemonList((state) => state.removePokemon)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {
        favorites.map((pokemon) => (
          <Link key={pokemon.id} 
            className="relative group w-90 h-50 flex items-center justify-start border p-3 rounded-xl gap-1 overflow-hidden transition-all duration-500"
            href={`/dashboard/list/${pokemon.name}`}
          >
          
            <h1 className="font-semibold text-2xl">{capitalize(pokemon.name)}</h1>

            <button 
              className="absolute top-3 left-3 hover:scale-130 transition-all duration-500 hover:text-gray-500 z-10"
              onClick={() => removePokemon(pokemon.id)}
            >
              <HeartOff />
            </button>
            
            <div className="absolute w-80 h-80 grayscale left-45 group-hover:grayscale-0 rotate-5 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
              <Image 
                src={pokemon.imageUrl}
                alt={`pokemon ${pokemon.name} image`}
                fill
              />
            </div>
            
          </Link>
        ))
      }
    </div>
  )
}