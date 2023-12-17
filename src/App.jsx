import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import { TodoContext } from "../contexts/TodoContext";
import DeleteModal from "./components/DeleteModal";

function App() {
  const { isOpenModal } = useContext(TodoContext);
  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center mt-[3rem] gap-5 ${
          isOpenModal && "blur-md"
        }`}
      >
        <h1 className="text-[2rem] text-black">Your Todo List</h1>
        <InputBar />
        <TodoList />
      </div>
      {isOpenModal && <DeleteModal />}
    </div>
  );
}

export default App;
