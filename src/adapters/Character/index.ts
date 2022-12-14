import { ApiCharacter, Character } from "@/types";

export const CharacterAdapter = (character: ApiCharacter) => {
    const newCharacter: Character = {
            uuid: character.id,
            name: character.name,
            status: character.status,
            image: character.image,
            gender: character.gender,
            species: character.species,
            type: character.type,
            origin: character.origin?.name,
            location: character.location,
            episode: character.episode,
            createdAt: character.createdAt
        } ;

    return newCharacter;   
}