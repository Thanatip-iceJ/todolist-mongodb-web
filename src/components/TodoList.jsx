import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../contexts/TodoContext";
import EditingTodo from "./EditingTodo";

function TodoList() {
  const { getAllTodos, allTodos } = useContext(TodoContext);
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {allTodos?.map((x) => (
        <TodoItem key={x._id} title={x?.title} isDone={x?.isDone} id={x._id} />
      ))}
    </div>
  );
}

export default TodoList;
