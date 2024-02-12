import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function TodoForm() {
  return (
    <form
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 20vh;
        z-index: 1;
      `}
    >
      <input type="text"></input>
      <button className="button" type="submit">
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
      <div className="select">
        <select>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
}
export { TodoForm };
