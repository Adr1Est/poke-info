import PokeGrid from "@/components/dashboard/PokeGrid";
import { getQueryClient } from "@/lib/get-query-client";
import { getPokeList } from "@/services/getPokemonList";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export default async function DashboardList(){
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["list", API_URL],
    queryFn: getPokeList,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokeGrid apiUrl={API_URL}/>
    </HydrationBoundary>
  )
}