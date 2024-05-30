import { useState } from 'react';

function Task() {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTasks = [...existingTasks, task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTask('');
    }
  };

  return (
    <div className="center-container">
      <input
        className="addtodo"
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default Task;
