export function TodoItem({ completed, title, id, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        ></input>
        {title}
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(id);
          }} // Avoid deleting automatically when clicking on the checkbox
        >
          Delete
        </button>
      </label>
    </li>
  );
}
