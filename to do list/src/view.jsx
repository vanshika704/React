import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import ToggleButton from './togglebutton';
import "bootstrap/dist/css/bootstrap.min.css";

function Listtodo({ chores }) {
  const [checkedItems, setCheckedItems] = useState([]);

  // Load checked items from local storage on component mount
  useEffect(() => {
    const storedCheckedItems = JSON.parse(localStorage.getItem('checkedItems'));
    if (storedCheckedItems) {
      setCheckedItems(storedCheckedItems);
    }
  }, []);

  const handleCheckboxChange = (index) => {
    let updatedCheckedItems;
    if (checkedItems.includes(index)) {
      updatedCheckedItems = checkedItems.filter(item => item !== index);
    } else {
      updatedCheckedItems = [...checkedItems, index];
    }
    setCheckedItems(updatedCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(updatedCheckedItems));
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
    // Clear checked items from local storage
    localStorage.removeItem('checkedItems');
    // Clear checked items state
    setCheckedItems([]);
  };

  const filteredChores = chores.filter((chore, index) => !checkedItems.includes(index));

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
        <div className="List" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <ul className="list-group">
            {filteredChores.map((chore, index) => (
              <li key={index} className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  id={`checkbox${index}`}
                  onChange={() => handleCheckboxChange(index)}
                  checked={checkedItems.includes(index)}
                />
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
