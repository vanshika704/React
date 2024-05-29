import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Task from "./Task.jsx";
import ToggleButton from './togglebutton.jsx';

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

  const handleButtonClick = () => {
    navigate('/task');
  }

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
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
            <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
            <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
            <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
          </li>
        </ul>
      </div>
      <div className="Add">
        <button className="btn btn-primary" type='button' onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
    </div>
  );
}
