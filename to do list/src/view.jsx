
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

function Listtodo() {
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
            <button className="btn btn-secondary icon" onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
        <div className="List">
          <ul className="list-group">
            <li className="list-group-item">
              <input className="form-check-input me-1 " type="checkbox" value="" id="firstCheckbox" />
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
          <button className="btn btn-secondary icon" onClick={handleButtonClick}><FontAwesomeIcon icon={faPlusSquare} /></button>
        </div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

export default Listtodo;
