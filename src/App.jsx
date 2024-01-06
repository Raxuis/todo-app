import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem !== "") {
      // Checking if the new item is empty
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false }, // Adding a new todo with a title and a random id
        ];
      });
      setNewItem(""); // Wiping the new item input
    }
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // Setting the todo's completed property to the value of the completed parameter
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); // Filtering out the todo with the matching id
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} // Setting the new item to the value of the input
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {/* Checking if there are any todos */}
        {todos.length === 0 && "No items to do"}
        {/* Mapping through each todo */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    toggleTodo(todo.id, e.target.checked);
                  }}
                ></input>
                {todo.title}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }} // Avoid deleting automatically when clicking on the checkbox
                >
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
