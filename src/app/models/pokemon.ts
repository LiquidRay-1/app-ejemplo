export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonApiResult {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}