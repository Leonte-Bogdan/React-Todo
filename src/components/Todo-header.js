import React from "react";
import { css } from "@emotion/css";
import "../fonts/Poppins-Regular.ttf";

function TodoHeader() {
  return (
    <header
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 20vh;
        z-index: 1;
        color: white;
      `}
    >
      <h1
        className={css`
          display: block;
          font-family: "Poppins", sans-serif;
          color: #ddbf5a, #fda085;
        `}
      >
        My Todo List.
      </h1>
    </header>
  );
}

export { TodoHeader };
