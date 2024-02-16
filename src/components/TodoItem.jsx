import React from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { deleteTodoItem, updateTodoItem } from "../lib/helpers";

export default function TodoItem({ todo, updateTodos }) {
  return (
    <div
      key={todo.id}
      className={css`
        display: flex;
        gap: 2rem;
        padding: 1rem;
        text-decoration: ${todo.completed ? "line-through" : "none"};
        background: #141428;
        margin: 1.5rem;
        border-radius: 10px;
        color: white;
        font-family: "Poppins", sans-serif;
      `}
    >
      <div
        className={css`
          width: 80%;
          align: left;
          user-select: none;
          color: #cccccc;
        `}
      >
        {todo.message}
      </div>
      <div
        onClick={() => {
          updateTodoItem({
            id: todo.id,
            message: todo.message,
            completed: !todo.completed,
          });

          updateTodos();
        }}
      >
        <FontAwesomeIcon
          icon={faCheck}
          className={css`
            cursor: pointer;
            color: yellow;
          `}
        />
      </div>
      <div
        onClick={() => {
          deleteTodoItem(todo.id);
          updateTodos();
        }}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className={css`
            cursor: pointer;
            color: yellow;
          `}
        />
      </div>
    </div>
  );
}
