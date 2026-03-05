"use client"
import { capitalize } from "@/lib/capitalize"
import { getPokeInfo } from "@/services/getPokemonList"
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
    <div>
      <div>
        <Image
          src={data.sprites.other["official-artwork"].front_default} 
          alt={`Picture of the pokemon ${data.species.name}`} 
          width={20}
          height={20}
        />
      </div>
      <h1>{capitalize(data.species.name)}</h1>
    </div>
  )
}