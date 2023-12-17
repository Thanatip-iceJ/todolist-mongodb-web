import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import axios from "../../config/axios";
import { TodoContext } from "../../contexts/TodoContext";

function EditingTodo({ title, setIsEditing, currentId }) {
  const { allTodos, setAllTodos } = useContext(TodoContext);
  const [input, setInput] = useState({ title });

  const handleCancel = () => {
    setInput(title);
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.patch(`/todo/${currentId}`, input);

      const resId = res.data.updated._id;
      const updatedTodos = [...allTodos];
      const foundIndex = allTodos.findIndex((x) => x._id === resId);
      if (foundIndex !== -1) {
        updatedTodos.splice(foundIndex, 1, res.data.updated);
        setAllTodos(updatedTodos);
      }
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="border-2 rounded-md py-2 px-3 w-[40rem]">
      <div className="flex justify-between">
        <input
          type="text"
          value={input.title}
          className="border rounded-md outline-none px-3 text-xl"
          onChange={(e) => setInput({ title: e.target.value })}
        />
        <div className="flex gap-2">
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditingTodo;
