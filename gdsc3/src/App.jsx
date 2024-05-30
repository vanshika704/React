import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Task from "./Task.jsx";
import ToggleButton from './togglebutton.jsx';
import { useEffect, useState } from 'react';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;






function TodoList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleButtonClick = () => {
    navigate('/task');
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="row1">
        <div className="searchbar-container">
          <input className="searchbar" type="text" placeholder="Search Notes" />
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ALL
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Important</a></li>
              <li><a className="dropdown-item" href="#">Professional</a></li>
            </ul>
          </div>
          <ToggleButton />
        </div>
      </div>
      <div className="List">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id={`checkbox${index}`} />
              <label className="form-check-label" htmlFor={`checkbox${index}`}>{task}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="Add">
        <button className="btn btn-primary" type="button" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
    </div>
  );
}


