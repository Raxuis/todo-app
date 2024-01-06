import React, { useState } from "react";
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem !== "") {
      onSubmit(newItem);
    }
    setNewItem(""); // Wiping the new item inputs when the form is submitted
  }

  return (
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
  );
}
