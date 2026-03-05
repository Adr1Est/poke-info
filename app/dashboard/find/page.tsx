import FindGrid from "@/components/dashboard/FindGrid";
import { getQueryClient } from "@/lib/get-query-client";
import { getAllPokemon } from "@/services/getPokemonList";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Find(){
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["allPokes"],
    queryFn: getAllPokemon,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FindGrid />  
    </HydrationBoundary>
  )
}