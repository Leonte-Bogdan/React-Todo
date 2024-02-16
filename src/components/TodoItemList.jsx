// @ts-nocheck
import React from "react";
import TodoItem from "./TodoItem";
import { css } from "@emotion/css";

export default function TodoItemList({ todos, updateTodos, filter }) {
  let filteredTodos = [];

  if (filter === "all") {
    filteredTodos = todos;
  }

  if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  if (filter === "incomplete") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }
  return (
    <div
      className={css`
        margin: auto;
        min-height: 30vh;
        font-size: 2rem;
        width: 30rem;
      `}
    >
      {filteredTodos.map((todo) => (
        <TodoItem key={todo?.id} todo={todo} updateTodos={updateTodos} />
      ))}
    </div>
  );
}
