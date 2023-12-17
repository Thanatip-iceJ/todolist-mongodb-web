import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { Checkbox, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditingTodo from "./EditingTodo";

function TodoItem({ title, isDone, id }) {
  const handleDeleteBtn = () => {
    setCurrentId(id);
    setIsOpenModal(true);
  };
  const handleEditBtn = () => {
    setIsEditing(true);
    setCurrentId(id);
  };

  const [isEditing, setIsEditing] = useState(false);

  const { setIsOpenModal, setCurrentId, currentId, handleCheckBox } =
    useContext(TodoContext);

  return (
    <>
      {!isEditing ? (
        <div className="flex justify-between border-2 rounded-md py-2 px-3 w-[40rem]">
          <div className="flex items-center">
            <Checkbox
              checked={isDone ? true : false}
              onClick={() => handleCheckBox(id)}
            />
            <p className={`text-xl ${isDone && "line-through"}`}>{title}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteBtn}
            >
              Delete
            </Button>

            <Button variant="contained" endIcon={""} onClick={handleEditBtn}>
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <EditingTodo
          title={title}
          setIsEditing={setIsEditing}
          currentId={currentId}
        />
      )}
    </>
  );
}

export default TodoItem;
