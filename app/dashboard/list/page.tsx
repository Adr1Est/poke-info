import PokeGrid from "@/components/dashboard/PokeGrid";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default function DashboardList(){
  const queryClient = getQueryClient()

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokeGrid />
    </HydrationBoundary>
  )
}