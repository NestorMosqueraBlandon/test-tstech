import { CharacterAdapter } from '@/adapters';
import {getCharacterById} from '@/services';
import { Character } from '@/types';
import {useState,  useEffect } from 'react';

export const useCharacterById = (uuid: string) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [character, setCharacter] = useState<Character>();
  
    const fetchCaracter = async() => {
      const {data} = await getCharacterById(uuid);
      setCharacter(CharacterAdapter(data));
      setLoading(false);
    }
  

    useEffect(() => {
        fetchCaracter();
    }, [uuid])

    return {
        loading,
        character
    }
}