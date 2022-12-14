import { Loader } from "@/components";
import { Modal } from "@/components/Shared";
import { useCharacterById } from "@/hooks";
import React from "react";

interface Props {
    uuid:string;
    openModal: boolean;
    setOpenModal: Function;
}
const ViewCharacter = ({uuid, openModal, setOpenModal}:Props) => {
  const { loading, character } = useCharacterById(uuid);

  return (
    <Modal isVisible={openModal} closeModal={setOpenModal}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-center text-xl font-bold">
            Character Information{" "}
          </h2>
          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex flex-col items-center ">
            <img
              src={character?.image}
              className="rounded w-[300px] mb-4"
              alt={character?.name}
            />
            <div>
              <h3>
                <span className="font-bold">Name:</span> {character?.name}
              </h3>
              <p>
                {" "}
                <span className="font-bold"> Status:</span> {character?.status}
              </p>
              <p>
                {" "}
                <span className="font-bold"> Specie:</span> {character?.species}
              </p>
              <p>
                {" "}
                <span className="font-bold"> Origin:</span>{" "}
                {character?.origin}
              </p>
              <p>
                {" "}
                <span className="font-bold"> Episodes:</span>{" "}
                {character?.episode?.length}
              </p>
              <div>
                {" "}
                <span className="font-bold">Location:</span>{" "}
                {character?.location?.name}
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ViewCharacter;
