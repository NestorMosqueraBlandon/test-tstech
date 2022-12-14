import { ApiCharacter, Character } from "@/types";

export const CharactersAdapter = (characters: ApiCharacter[]) => {
    const newCharacters: Character[] = characters.map((character: ApiCharacter) => {
        return{
            uuid: character.id,
            name: character.name,
            status: character.status,
            image: character.image,
            gender: character.gender,
            species: character.species,
            type: character.type,
            origin: character.origin.name,
            location: character.location,
            episode: character.episode,
            createdAt: character.createdAt
        } 
    }) ;

    return newCharacters;   
}