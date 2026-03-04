export const getPokeList = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, url] = queryKey

  const response = await fetch(url)

  if(!response.ok) throw new Error("Error fetching Pokemon list")

  return response.json()
}