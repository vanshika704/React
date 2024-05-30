
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import ToggleButton from './togglebutton';
import "bootstrap/dist/css/bootstrap.min.css";
function Listtodo({ chores }) {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <div className="row1">
          <div className="searchbar-container">
            <input className="searchbar" type="text" placeholder="Search Notes" />
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            {chores.map((chore, index) => (
              <li key={index} className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id={`checkbox${index}`} />
                <label className="form-check-label" htmlFor={`checkbox${index}`}>{chore}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="Add">
          <button className="btn btn-secondary icon" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

Listtodo.propTypes = {
  chores: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Listtodo;
