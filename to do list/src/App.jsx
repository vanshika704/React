import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import todoImage from './assets/todo.jpg';
import download from './assets/download.jpeg';
import Listtodo from './view.jsx'; // Corrected import statement

function App() {
  const chores = ["Clean the dishes", "Go to market", "Pay bills"];

  return (
    <Router>
      <div className="card-container">
        <Enterycard />
        <Routes>
          <Route path="/view" element={<Listtodo />} />
        </Routes>
        <Card2 chores={chores} />
      </div>
    </Router>
  );
}

export default App;

function Enterycard() {
  return (
    <div className="card" style={{ width: '30rem', margin: '10px', height: '40rem' }}>
      <img src={todoImage} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Enter Here</p>
          <input type='text' className="form-control" style={{ flex: '1' }} />
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><input type='date' /></li>
        <li className="list-group-item"><input type='time' /></li>
        <li className="list-group-item"><input type="text" placeholder='enter specific details' /></li>
      </ul>
    </div>
  );
}

function Card2({ chores }) {
  return (
    <div className="card" style={{ width: '30rem', margin: '10px', height: '40rem' }}>
      <img src={download} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Your chores:</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {chores.map((chore, index) => (
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
