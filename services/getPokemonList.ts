export const getPokeList = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, url] = queryKey

  const response = await fetch(url)

  if(!response.ok) throw new Error("Error fetching Pokemon list")

  return response.json()
}

export const getPokeInfo = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, pokemon] = queryKey

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  if(!response.ok) throw new Error("Error fetching Pokemon info")

  return response.json()
}

export const getAllPokemon = async () => {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")

  if(!response.ok) throw new Error("Error fetching all Pokemon list")

  return response.json()
}