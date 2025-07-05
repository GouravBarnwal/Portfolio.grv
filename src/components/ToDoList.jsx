import React, { useEffect, useState } from "react";
import "../to-do-list.css";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Load items from localStorage
    const stored = localStorage.getItem("itemsJson");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("itemsJson", JSON.stringify(items));
  }, [items]);

  const getAndUpdate = (e) => {
    e.preventDefault();
    if (!title) return;
    setItems([...items, [title, description]]);
    setTitle("");
    setDescription("");
  };

  const deleted = (idx) => {
    const newItems = items.filter((_, i) => i !== idx);
    setItems(newItems);
  };

  const clearStorage = () => {
    if (window.confirm("Do you really want to clear?")) {
      setItems([]);
      localStorage.clear();
    }
  };

  return (
    <div className="todo-app-wrapper">
      {/* Bootstrap CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css" />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TODOS List</a>
        </div>
      </nav>
      <div className="container">
        <h2>Todo List Manager</h2>
        <form onSubmit={getAndUpdate}>
          <div className="mb-3">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter your task title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Task Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter task description (optional)..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <br />
          <div className="button-container">
            <button type="submit" id="add" className="btn btn-primary">
              Add Task
            </button>
            <button type="button" id="clear" className="btn btn-secondary" onClick={clearStorage}>
              Clear All
            </button>
          </div>
        </form>
        <div id="items">
          <h2>Your Tasks ({items.length})</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SNo.</th>
                <th scope="col">Item Title</th>
                <th scope="col">Item Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {items.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{textAlign: 'center', padding: '2rem', color: '#6c757d', fontStyle: 'italic'}}>
                    No tasks yet! Add your first task above.
                  </td>
                </tr>
              ) : (
                items.map((item, idx) => (
                  <tr key={idx}>
                    <th scope="row">#{idx + 1}</th>
                    <td><strong>{item[0]}</strong></td>
                    <td>{item[1] || <em style={{color: '#6c757d'}}>No description</em>}</td>
                    <td>
                      <button className="btn btn-sm btn-secondary" onClick={() => deleted(idx)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDoList; 