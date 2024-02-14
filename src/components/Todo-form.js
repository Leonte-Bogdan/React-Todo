import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function TodoForm({ updateTodos, setFilter }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const createNewTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: crypto.randomUUID(),
        message: inputValue,
        completed: false,
      };

      localStorage.setItem(`todo-item-${newTodo.id}`, JSON.stringify(newTodo));

      updateTodos();
      setInputValue("");
    } else {
      console.log("Please enter a todo message");
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
          onClick={createNewTodo}
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
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
}
export { TodoForm };
