import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./components/NewTodoForm.jsx";
import { TodoList } from "./components/TodoList.jsx";

export default function App() {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Saving the todos to localStorage
  });
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [] // Setting the initial state of the todos to the value of localStorage
  );
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }, // Adding a new todo with a title, a random id and a completed property of false
      ];
    });
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
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
