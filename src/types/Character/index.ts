import { InfoFetch } from "../models/infoFetch";

export interface InfoCharacter {
    info: InfoFetch;
    results: ApiCharacter[];
}

export interface ApiCharacter{
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    type: string;
    origin: Origin;
    location: Location;
    episode: string[];
    createdAt: string;
}

export interface Character{
    uuid: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    type: string;
    origin: string;
    location: Location;
    episode: string[];
    createdAt: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}
