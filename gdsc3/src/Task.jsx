import { useState, useEffect } from 'react';

function Task() {
  const [taskInput, setTaskInput] = useState('');

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  useEffect(() => {
    // Retrieve value from localStorage if exists
    const storedValue = localStorage.getItem('taskInput');
    if (storedValue) {
      setTaskInput(storedValue);
    }
  }, []);

  const handleSave = () => {
    // Save input value to localStorage
    localStorage.setItem('taskInput', taskInput);
  };

  return (
    <div className="center-container">
      <input 
        className="addtodo" 
        type="text" 
        placeholder="Enter Task" 
        value={taskInput} 
        onChange={handleChange} 
        onBlur={handleSave} 
      />
    </div>
  );
}

export default Task;
