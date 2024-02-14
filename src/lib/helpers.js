export function getAllLocalStorageTodoItems() {
  const allLocalStorageItems = Object.entries(localStorage);
  const JSONtodoItems = allLocalStorageItems.filter(([key, _value]) => key.startsWith("todo-item-"));
  const parsedTodoItems = JSONtodoItems.map(([_key, value]) => JSON.parse(value));

  return parsedTodoItems;
}

export function updateTodoItem(props) {
  const { id, message, completed } = props;
  const todoItem = {
    id,
    message,
    completed,
  };

  localStorage.setItem(`todo-item-${id}`, JSON.stringify(todoItem));
}

export function deleteTodoItem(id) {
  localStorage.removeItem(`todo-item-${id}`);
}
