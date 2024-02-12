import React from "react";
import { TodoForm } from "./Todo-form";
import { TodoHeader } from "./Todo-header";

function Todo() {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
    </div>
  );
}

export default Todo;
