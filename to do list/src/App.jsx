import { useState, useEffect } from 'react';// use state is kind of variable with which you can update the state with time
import PropTypes from 'prop-types';// use of props
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';// navigation
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import todoImage from './assets/todo.jpg';
import download from './assets/download.jpeg';
import Listtodo from './view.jsx'; 
import ToggleButton from './togglebutton.jsx';

function App() {
  const [chores, setChores] = useState(() => {
    const savedChores = localStorage.getItem('chores');
    return savedChores ? JSON.parse(savedChores) : ["Clean the dishes", "Go to market", "Pay bills"];
  });

  useEffect(() => {
    localStorage.setItem('chores', JSON.stringify(chores));
  }, [chores]);

  const addChore = (chore) => {
    setChores([...chores, chore]);
  };

  return (
    <Router>
      <div className="toggle-button-container">
        <ToggleButton />
      </div>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Enterycard addChore={addChore} />
        <Routes>
        <Route path="/view" element={<Listtodo chores={chores} />} />
        </Routes>
        <Card2 chores={chores} />
      </div>
    </Router>
  );
}

export default App;

function Enterycard({ addChore }) {
  const [chore, setChore] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');

  const handleAddChore = () => {
    const newChore = `${chore} on ${date} at ${time} - ${details}`;
    addChore(newChore);
    setChore('');
    setDate('');
    setTime('');
    setDetails('');
  };

  return (
    <div className="card" style={{ width: '100%', maxWidth: '30rem', margin: '10px', height: '40rem', overflow: 'hidden' }}>
      <img src={todoImage} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Enter Here</p>
          <input type='text' className="form-control" value={chore} onChange={(e) => setChore(e.target.value)} style={{ flex: '1' }} />
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><input type='date' value={date} onChange={(e) => setDate(e.target.value)} /></li>
        <li className="list-group-item"><input type='time' value={time} onChange={(e) => setTime(e.target.value)} /></li>
        <li className="list-group-item"><input type="text" placeholder='enter specific details' value={details} onChange={(e) => setDetails(e.target.value)} /></li>
      </ul>
      <div className="card-body">
        <button onClick={handleAddChore} className="btn btn-primary">Add Chore</button>
      </div>
    </div>
  );
}

Enterycard.propTypes = {
  addChore: PropTypes.func.isRequired,
};

function Card2({ chores }) {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '30rem', margin: '10px', height: '40rem', overflow: 'hidden' }}>
      <img src={download} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Your chores:</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {chores.slice(-3).map((chore, index) => (
          <li key={index} className="list-group-item">{chore}</li>
        ))}
      </ul>
      <div className="card-body">
        <Link to="/view" className="card-link">View all</Link>
      </div>
    </div>
  );
}

Card2.propTypes = {
  chores: PropTypes.arrayOf(PropTypes.string).isRequired,
};
