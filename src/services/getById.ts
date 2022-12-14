import { api } from "@/api"
import { ApiCharacter } from "@/types";

export const getCharacterById = (uuid:string) => {
    return api.get<ApiCharacter>(`/character/${uuid}`);
}