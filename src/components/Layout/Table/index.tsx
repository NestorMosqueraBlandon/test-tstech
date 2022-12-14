import { Character } from '@/types'
import React from 'react'
import Tbody from './Tbody';

interface Props {
    characters: Character[];
    setDeleteCharacter: Function;
    setViewCharacter: Function;
    setEditCharacter: Function;
}

const Table = ({characters, setDeleteCharacter, setViewCharacter, setEditCharacter}: Props) => {

    return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Name
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Species
        </th>
        <th scope="col" className="py-3 px-6">
          Gender
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    <Tbody characters={characters} setDeleteCharacter={setDeleteCharacter} setViewCharacter={setViewCharacter} setEditCharacter={setEditCharacter} />
  </table>
  )
}

export default Table
