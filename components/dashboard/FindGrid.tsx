"use client"
import CustomInput from "@/components/dashboard/CustomInput"
import { getAllPokemon } from "@/services/getPokemonList"
import { PokemonFromList } from "@/types/pokeTypes"
import { useQuery } from "@tanstack/react-query"
import { Delete, LoaderCircle, TriangleAlert } from "lucide-react"
import PokeCardGrid from "./PokeCardGrid"
import { usePokemonFilter } from "@/store"

export default function FindGrid(){
  const filter = usePokemonFilter((state) => state.filter)
  const setFilter = usePokemonFilter((state) => state.setFilter)
  const resetFilter = usePokemonFilter((state) => state.resetFilter)
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPokes"],
    queryFn: getAllPokemon,
  })

  if(isLoading){
    return (
      <div className="relative flex flex-row items-center justify-center w-full md:w-9/10 gap-1">
       <LoaderCircle /> 
       <h2>Loading... </h2>
      </div>
    )
  }

  if(error){
    return (
      <div className="relative flex flex-row items-center justify-center w-full md:w-9/10 gap-1">
       <TriangleAlert /> 
       <h2>Error fetching list</h2>
      </div>
    )
  }

  const filteredList = data.results.filter((p: PokemonFromList) => 
    p.name.toLowerCase().includes(filter.toLowerCase()))

  return(
    <div className="relative flex flex-col items-center justify-center w-full p-2 md:p-0 md:w-9/10 gap-1">
      <h1 className="font-semibold text-xl">{`${data.count} Pokemon`}</h1>
      <div className="w-full relative">
        <CustomInput 
          id="pokemonFilter"
          type="text"
          placeholder="rayquaza, deoxys, pikachu..."
          title="Search Pokemon"
          value={filter}
          handleChange={(e) => setFilter(e.target.value)}
        />
        <button 
          className={`absolute right-1 bottom-1 ${!filter && "hidden"} hover:text-stone-400`}
          onClick={resetFilter}
        >
          <Delete />
        </button>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 overflow-y-auto h-100 md:h-150">
        {
          filteredList.map((p: PokemonFromList) => (
            <PokeCardGrid key={p.name} name={p.name}/>
          ))
        }
      </div>
    </div>
  )
}