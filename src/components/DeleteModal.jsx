import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function DeleteModal() {
  const { setIsOpenModal, setCurrentId, handleDelete, currentId } =
    useContext(TodoContext);

  const handleCancelBtn = () => {
    setIsOpenModal(false);
    setCurrentId("");
  };
  return (
    <div className="fixed top-[50vh] translate-y-[-50%] left-[50%] translate-x-[-50%]">
      <div className="p-[6rem] border-2 flex flex-col justify-center items-center rounded-md gap-[3rem] bg-white">
        <h2 className="font-bold text-[2rem]">
          Are you sure to delete this todo?
        </h2>
        <div className="flex gap-10">
          <button
            className="border border-red-500 text-red-500 px-12 py-4 rounded-sm font-semibold text-[1.3rem] hover:bg-red-500 hover:text-white transition-all duration-200"
            onClick={() => handleDelete(currentId)}
          >
            Delete
          </button>
          <button
            className="border border-gray-700 text-gray-700 px-12 py-4 rounded-sm font-semibold text-[1.3rem] hover:bg-black hover:text-white transition-all duration-200"
            onClick={handleCancelBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
