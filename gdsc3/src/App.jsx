import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';// importing for navigation
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Task from "./Task.jsx";
import ToggleButton from './togglebutton.jsx';//theme change
import { useEffect, useState } from 'react';//use State: kind of variable in which you can update the state of a particular varibale;
//use effect: The useEffect hook allows you to perform side effects in your components.
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
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];// use effect kehra h ki local storage se tasks naam ka saaman le aao . or usko json me convert kiya 
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
          {tasks.map((task, index) => (// mapping in tasks with index , returning list and key ,key used for index and in checkbox for task to be shown serial wise
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


