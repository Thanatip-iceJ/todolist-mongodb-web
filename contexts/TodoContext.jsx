import React, { createContext, useState } from "react";
import axios from "../config/axios";

export const TodoContext = createContext();
function TodoContextProvider({ children }) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState({ title: "" });
  const [allTodos, setAllTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const handleSubmit = async () => {
    try {
      if (input) {
        const res = await axios.post("/todo/create", input);

        setAllTodos([res.data.todo, ...allTodos]);
      }
      setInput({ title: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const getAllTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/todo/getAll");

      setAllTodos(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (param) => {
    try {
      const res = await axios.delete(`/todo/${param}`);

      setAllTodos(allTodos.filter((x) => x._id !== res.data.deleted._id));
      setIsOpenModal(false);
      setCurrentId("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleCheckBox = async (id) => {
    try {
      const res = await axios.patch(`/todo/toggle/${id}`);

      const resData = res.data.output;
      const newTodo = [...allTodos];
      const foundIndex = newTodo.findIndex((x) => x._id === resData._id);
      newTodo.splice(foundIndex, 1, resData);
      setAllTodos(newTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const sharedContexts = {
    isDone,
    setIsDone,
    isEditing,
    setIsEditing,
    input,
    setInput,
    handleSubmit,
    getAllTodos,
    allTodos,
    setAllTodos,
    isOpenModal,
    setIsOpenModal,
    currentId,
    setCurrentId,
    handleDelete,
    handleCheckBox,
  };
  return (
    <TodoContext.Provider value={sharedContexts}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
