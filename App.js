import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

const TodoApp = () => {
  // State to manage the list of tasks
  const [todos, setTodos] = useState([]);
  // State to manage the input field for adding new tasks
  const [newTodo, setNewTodo] = useState('');
  // State to manage the color of new tasks
  const [color, setColor] = useState('#ffffff');
  // State to manage the emoji for new tasks
  const [emoji, setEmoji] = useState('😊');

  // Function to handle adding a new task
  const handleAddTodo = () => {
    if (!newTodo.trim()) return; // Avoid adding empty tasks

    const todoItem = {
      text: newTodo,
      color: color,
      emoji: emoji,
      id: Date.now(),
    };
    setTodos([...todos, todoItem]);
    setNewTodo('');
  };

  // Function to handle deleting a task
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to handle editing a task
  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1 className="title">Todo List with Emojis and Colors</h1>

      {/* Input for new task */}
      <div className="input-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        
        {/* Emoji Picker */}
        <select className="emoji-select" onChange={(e) => setEmoji(e.target.value)} value={emoji}>
          <option value="😊">😊</option>
          <option value="😍">😍</option>
          <option value="😎">😎</option>
          <option value="🙌">🙌</option>
          <option value="🚀">🚀</option>
        </select>
        
        {/* Color Picker */}
        <input
          type="color"
          className="color-picker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button className="add-btn" onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-item"
            style={{ backgroundColor: todo.color }}
          >
            <span className="emoji">{todo.emoji}</span>
            <span
              className="todo-text"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEditTodo(todo.id, e.target.innerText)}
            >
              {todo.text}
            </span>

            <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;


