import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function TodoForm() {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const CreateNewTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = document.createElement("li");
      newTodo.textContent = inputValue;
      document.getElementById("listItems")?.appendChild(newTodo);
      setInputValue("");
    }
  };
  return (
    <div>
      <form
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 20vh;
          z-index: 1;
        `}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={css`
            padding: 0.4rem;
            font-size: 2rem;
            border: none;
            width: 25rem;
            &:focus {
              outline: none;
              border: 0.1px solid #ffbe76;
            }
          `}
        ></input>
        <button
          className={css`
            border: none;
            font-size: 2.3rem;
            padding: 0.25rem;
            border-right: 5px solid;
            border-color: #ffbe76;
            color: #ffbe76;
            background: white;
            cursor: pointer;
            transition: background 0.3s ease;
            &:hover {
              background: #45acde;
              color: white;
            }
          `}
          type="button"
          onClick={CreateNewTodo}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
        <div className={css``}>
          <select
            className={css`
              padding: 1.1rem;
              width: 10rem;
              cursor: pointer;
              display: flex;
              appearance: none;
              border: none;
              transition: background 0.6s ease;
              &:hover {
                background: #45acde;
                color: white;
              }
            `}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
      <div
        id="listItems"
        className={css`
          display: flex;
          list-style: none;
          margin: 1rem;
          font-size: 1.5rem;
          justify-content: center;
          align-items: center;
          color: white;
        `}
      ></div>
    </div>
  );
}
export { TodoForm };
