import { Modal } from "@/components/Shared";
import { Character } from "@/types";
import React, { useEffect, useState } from "react";

interface Props {
  openModal: boolean;
  setOpenModal: Function;
  character: Character;
  editCharacterHandler: Function;
}

const EditCharacter = ({
  character,
  openModal,
  setOpenModal,
  editCharacterHandler,
}: Props) => {
  const [newCharacter, setNewCharacter] = useState({
    image: character.image,
    episode: character.episode,
    gender: character.gender,
    location: character.location,
    uuid: character.uuid,
    name: character.name,
    status: character.status,
    species: character.species,
    origin: character.origin,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = () => {
    editCharacterHandler(newCharacter);
  };

  useEffect(() => {
    setNewCharacter(character);
  }, [character]);

  return (
    <Modal isVisible={openModal} closeModal={setOpenModal}>
      <>
        <h2 className="text-center text-xl font-bold">Edit Character</h2>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-col items-center ">
          <img
            src={character?.image}
            className="rounded w-[300px] mb-4"
            alt={character?.name}
          />
          <div>
            <label htmlFor="name">
              Edit name
              <input
                type="text"
                name="name"
                id="name"
                className="block p-2  w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edit name"
                value={newCharacter.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
            </label>

            <label htmlFor="status">
              Edit Status
              <input
                type="text"
                name="status"
                id="status"
                className="block p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edit status"
                value={newCharacter.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
            </label>

            <label htmlFor="species">
              Edit Species
              <input
                type="text"
                name="species"
                id="table-search-users"
                className="block p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edit species"
                value={newCharacter.species}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
            </label>
            <label htmlFor="status">
              Edit Origin
              <input
                type="text"
                name="status"
                id="table-search-users"
                className="block p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Edit origin"
                value={newCharacter.origin}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
              />
            </label>

            <label htmlFor="status">
              Episodes
              <input
                type="text"
                name="status"
                defaultValue={character?.episode?.length}
                id="table-search-users"
                className="block p-2 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Episodes"
                readOnly
              />
            </label>
          </div>
          <button
            onClick={submit}
            className="bg-blue-500 w-7/12 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </div>
      </>
    </Modal>
  );
};

export default EditCharacter;
