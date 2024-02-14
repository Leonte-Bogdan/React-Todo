// @ts-nocheck
import React from "react";
import TodoItem from "./TodoItem";
import { css } from "@emotion/css";

export default function TodoItemList({ todos, updateTodos }) {
  return (
    <div
      className={css`
        margin: auto;
        min-height: 30vh;
        font-size: 2rem;
        width: 30rem;
        background: white;
      `}
    >
      {todos.map((todo) => (
        <TodoItem key={todo?.id} todo={todo} updateTodos={updateTodos} />
      ))}
    </div>
  );
}
