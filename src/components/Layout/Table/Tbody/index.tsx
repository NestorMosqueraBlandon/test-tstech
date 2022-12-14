import { Character } from '@/types';
import React from 'react'

interface Props {
    characters: Character[];
    setDeleteCharacter: Function;
    setViewCharacter: Function;
    setEditCharacter: Function;
}

const Tbody = ({characters, setDeleteCharacter, setViewCharacter, setEditCharacter}: Props) => {
  return (
    <tbody>
      {characters.map(
        ({ uuid, name, image, status, species, gender, origin, episode, location }: Character) => (
          <tr
            key={uuid}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
        
            <th
              scope="row"
              className="flex items-center gap-2 py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                src={image ? image : "/img/none_image.png"}
                title="Click to expand image"
                className="w-10 h-10 br-10 rounded-full"
                alt={name}
                loading="lazy"
              />
              {name}
            </th>
            <td className="py-4 px-6">{status}</td>
            <td className="py-4 px-6">{species}</td>
            <td className="py-4 px-6">{gender}</td>
            <td className="py-4 px-6 flex gap-2 ">
              <button
                onClick={() => setDeleteCharacter((prev: string) => [...prev, uuid])}
                className="text-xl"
                title="Delete"
              >
                <i className="bx bx-trash-alt"></i>
              </button>
              <button title="Edit character"  
                onClick={() => setEditCharacter({ uuid, name, image, status, species, gender, location, origin, episode })} className="text-xl">
                <i className="bx bx-pencil"></i>
              </button>
              <button
                className="text-xl"
                title="View character"
                onClick={() => setViewCharacter(uuid)}
              >
                <i className="bx bx-detail"></i>
              </button>
            </td>
          </tr>
        )
      )}
    </tbody>
  )
}

export default Tbody
