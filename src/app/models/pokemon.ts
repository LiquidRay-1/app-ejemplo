export interface Pokemon {
    name: string;
    url: string;
    sprites?: Sprites;
}

export interface PokemonApiResult {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: Other;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    official_artwork: OfficialArtwork;
    showdown: Showdown;
}

export interface DreamWorld {
    front_default: string;
    front_female: string;
}

    export interface Home {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

export interface Showdown {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}