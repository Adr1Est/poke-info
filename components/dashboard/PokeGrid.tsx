"use client"
import { useQuery } from "@tanstack/react-query";
import PokeCardGrid from "./PokeCardGrid";
import PokeGridButton from "./PokeGridButton";
import { getPokeList } from "@/services/getPokemonList";
import { PokemonFromList } from "@/types/pokeTypes";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import { useState } from "react";



export default function PokeGrid({ apiUrl }: { apiUrl: string }){
  const [url, setUrl] = useState(apiUrl)

  const { data, isLoading, error } = useQuery({
    queryKey: ["list", url],
    queryFn: getPokeList,
  })

  if(isLoading){
    return (
      <div className="relative flex flex-row items-center justify-center w-9/10 gap-1">
       <LoaderCircle /> Loading... 
      </div>
    )
  }

  if(error){
    return (
      <div className="relative flex flex-row items-center justify-center w-9/10 gap-1">
       <TriangleAlert /> Error fetching list
      </div>
    )
  }

  return(
    <div className="relative flex flex-row items-center justify-center w-full md:w-9/10 gap-1">

      <PokeGridButton 
        direction="l" 
        onClick={() => data?.previous && setUrl(data.previous)}
        isDisabled={!data.previous}
      />

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {
          data?.results.map((p: PokemonFromList) => (
            <PokeCardGrid key={p.name} name={p.name}/>
          ))
        }
      </div>

      <PokeGridButton 
        direction="r" 
        onClick={() => data?.next && setUrl(data.next)}
        isDisabled={!data.next}
      />

    </div>
  )
}