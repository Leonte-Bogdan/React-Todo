import React, { useEffect, useState } from "react";
import { TodoForm } from "./Todo-form";
import { TodoHeader } from "./Todo-header";
import TodoItemList from "./TodoItemList";
import { getAllLocalStorageTodoItems } from "../lib/helpers";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const updateTodos = () => {
    const localStorageTodoItems = getAllLocalStorageTodoItems();

    setTodos(localStorageTodoItems);
  };

  useEffect(() => {
    updateTodos();
  }, []);

  useEffect(() => {
    updateTodos();
  }, [filter]);

  return (
    <div>
      <TodoHeader />
      <TodoForm updateTodos={updateTodos} setFilter={setFilter} />
      <TodoItemList filter={filter} todos={todos} updateTodos={updateTodos} />
    </div>
  );
}

export default Todo;
