import { useState } from "react";

export const useSearch = (setCurrentPage: Function) => {
    const [search, setSearch] = useState("");

    const searchCharacter = (value: string) => {
        setCurrentPage(1);
        setSearch(value);
      };
      
  return {
   search, 
   searchCharacter
  };
};
