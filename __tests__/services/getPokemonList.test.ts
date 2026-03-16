import { getPokeList, getPokeInfo, getAllPokemon } from "@/services/getPokemonList";

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

describe("getPokeList", () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it("fetches data successfully", async () => {
    const mockData = { results: [] };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await getPokeList({
      queryKey: ["pokeList", "https://example.com"],
    });

    expect(global.fetch).toHaveBeenCalledWith("https://example.com");
    expect(result).toEqual(mockData);
  });

  it("throws error when response is not ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(
      getPokeList({
        queryKey: ["pokeList", "https://example.com"],
      })
    ).rejects.toThrow("Error fetching Pokemon list");
  });
})

describe("getPokeInfo", () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it("fetches real pokemon data structure (pikachu)", async () => {
    const pikachuResponse = {
      id: 25,
      name: "pikachu"
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(pikachuResponse),
    });

    const result = await getPokeInfo({
      queryKey: ["pokeInfo", "pikachu"],
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );

    expect(result).toMatchObject({
      id: 25,
      name: "pikachu",
    });
  });
})

describe("getAllPokemon", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("fetches all pokemon", async () => {
    const mockData = { results: [] };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await getAllPokemon();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    expect(result).toEqual(mockData);
  });

  it("throws error if request fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(getAllPokemon()).rejects.toThrow(
      "Error fetching all Pokemon list"
    );
  });
});