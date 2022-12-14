import { CharactersAdapter } from '@/adapters';
import { listCharacter } from '@/services';
import { Character } from '@/types';
import {useState,  useEffect } from 'react';

export const useCharacter = (page: number, name:string, status: string) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [amount, setAmount] = useState<number>(0);
    const [pages, setPages] = useState<number>(0);
  
    const fetchCaracters = async() => {
      const {data} = await listCharacter({page, name, status});
      const {results} = data;
      const {info} = data;
      const {count, pages} = info;
      
      setPages(pages);
      setAmount(count)
      setCharacters(CharactersAdapter(results));
      setLoading(false);
    }
  

    useEffect(() => {
        fetchCaracters();
    }, [page, name, status])

    return {
        loading,
        amount,
        pages,
        characters
    }
}