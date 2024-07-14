import React, { useState } from 'react';

const TodoList = () => {
  // State for managing todo items
  const [todos, setTodos] = useState([]);
  // State for managing search input
  const [searchTerm, setSearchTerm] = useState('');
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add logic here to toggle CSS classes or theme
  };

  // Function to handle adding new todo items
  const addTodo = (todoText) => {
    setTodos([...todos, { id: todos.length + 1, text: todoText }]);
  };

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // You can add logic here to filter todos based on search term
  };

  // JSX for the TodoList component
  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </div>
      {/* Todo items display */}
      <ul>
        {/* Map through todos array and display each todo item */}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
