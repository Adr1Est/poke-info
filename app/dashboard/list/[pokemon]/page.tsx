"use client"
import { capitalize } from "@/lib/capitalize"
import { getPokeInfo } from "@/services/getPokemonList"
import { PokeMoves, PokeStats } from "@/types/pokeTypes"
import { useQuery } from "@tanstack/react-query"
import { LoaderCircle, TriangleAlert } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function PokemonCard(){
  const params = useParams()
  const pokemon = params.pokemon as string

  const { data, isLoading, error} = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: getPokeInfo
  })

  if(isLoading){
    return(
      <div className="flex flex-row items-center justify-center gap-1">
        <LoaderCircle /> 
        <h1>Loading...</h1>
      </div>
      
    )
  }

  if(error){
    return (
      <div className="flex flex-row items-center justify-center gap-1">
       <TriangleAlert /> Error fetching list
      </div>
    )
  }

  return(
    <div className="w-full md:w-1/2 flex flex-col gap-3 h-150 overflow-y-auto">

      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="relative w-40 h-40 aspect-square">
          <Image
            src={data.sprites.other["official-artwork"].front_default} 
            alt={`Picture of the pokemon ${data.species.name}`} 
            fill
          />
        </div>
        <h1 className="text-2xl font-semibold">{capitalize(data.species.name)}</h1>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start">
        <h2 className="text-xl font-medium">Stats</h2>
        <div className="grid grid-cols-2 gap-3">
          {
            data.stats.map((s: PokeStats) => (
              <p key={s.base_stat + s.stat.name}>
                {`${capitalize(s.stat.name)}: ${s.base_stat}`}
              </p>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start">
          <h3 className="text-lg font-medium">{`Weight: ${data.weight}`}</h3>
      </div>
      <div className="flex flex-col gap-1 items-center md:items-start">
          <h2 className="text-xl font-medium">Moves</h2>
          <div className="grid grid-cols-3 gap-3 overflow-y-auto h-50">
            {
              data.moves.map((m: PokeMoves) => (
                <div key={m.move.name}>
                  <h3>{m.move.name}</h3>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}