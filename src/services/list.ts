import { api } from "@/api"
import { InfoCharacter } from "@/types";

interface Props {
    page: number;
    name: string;
    status: string;
}

export const listCharacter = ({page, name, status}: Props) => {
    return api.get<InfoCharacter>(`/character/?page=${page}&name=${name}&status=${status}`);
}
