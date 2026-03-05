export interface PokemonFromList {
  name: string;
  url: string;
}

export interface PokeStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokeMoves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: MoveDetails[];
}

export interface MoveDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  order?: string | null;
  version_group: {
    name: string;
    url: string;
  };
}