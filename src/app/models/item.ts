export interface Item {
    name: string;
    url: string;
    sprites?: Sprite;
}

export interface ItemApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Item[];
}

export interface Sprite {
    default: string;
}

export interface ItemDetail {
    attributes: any[];
    baby_trigger_for: any;
    category: any;
    cost: number;
    effect_entries: any[];
    flavor_text_entries: any[];
    fling_effect: any;
    fling_power: any;
    game_indices: any[];
    held_by_pokemon: any[];
    id: number;
    machines: any[];
    name: string;
    names: any[];
    sprites: Sprite;
}