import { Footer, Header, Loader, Table } from "@/components";
import { useCharacter } from "@/hooks";
import { usePagination } from "@/hooks/usePagination";
import { useSearch } from "@/hooks/useSearch";
import React from "react";
import { useState } from "react";
import EditCharacter from "./EditCharacter";
import ViewCharacter from "./ViewCharacter";
import { Character } from "../../types/Character/index";

const Home = () => {
  const [deleteIndex, setDeleteIndex] = useState<string[]>([]);
  const [editedElements, setEditedElements] = useState<Character[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [characterId, setCharacterId] = useState<string>("");
  const [characterEdit, setCharacterEdit] = useState<Character>({
    image: "",
    episode: [],
    name: "",
    gender: "",
    location: {
      name: "",
      url: "",
    },
    uuid: "",
    origin: "",
    status: "",
    species: "",
    type: "",
    createdAt: "",
  });

  const { currentPage, setCurrentPage, nextPage, prevPage } = usePagination();
  const { search, searchCharacter } = useSearch(setCurrentPage);
  const [status, setStatus] = useState("alive");

  const { loading, amount, pages, characters } = useCharacter(
    currentPage,
    search,
    status
  );

  const filteredCharacter = () => {
    const elements = characters.filter(
      (character) => !deleteIndex.includes(character.uuid)
    );

    const data = elements.map((character) => {
      editedElements.map((element) => {
        if (character.uuid == element.uuid) {
          character = element;
        }
      });
      return character;
    });

    return data;
  };

  const editCharacterHandler = (newCharacter: Character) => {
    setEditedElements((prev) => [...prev, newCharacter]);
    setOpenModalEdit(false);
  };

  const viewCharacter = (uuid: string) => {
    setOpenModal(true);
    setCharacterId(uuid);
  };

  const editCharacter = (characterToEdit: Character) => {
    setOpenModalEdit(true);
    setCharacterEdit(characterToEdit);
  };

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <Header search={searchCharacter} setStatus={setStatus} />
      <Table
        characters={filteredCharacter()}
        setDeleteCharacter={setDeleteIndex}
        setViewCharacter={viewCharacter}
        setEditCharacter={editCharacter}
      />
      <Footer
        nextPage={nextPage}
        prevPage={prevPage}
        amount={amount}
        currentPage={currentPage}
        pages={pages}
      />
      <ViewCharacter
        uuid={characterId}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <EditCharacter
        openModal={openModalEdit}
        setOpenModal={setOpenModalEdit}
        character={characterEdit}
        editCharacterHandler={editCharacterHandler}
      />
    </div>
  );
};

export default Home;
