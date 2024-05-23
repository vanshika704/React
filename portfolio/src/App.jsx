import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <Card1 />
    </>
  );
}

export default App;

function Card1() {
  return (
    <div className="centered-card">
      <div className="card-content">
        <div>
          <ul>
            <li>
              <div>Vanshika Sharma</div><hr></hr>
            </li>
            <li className="social">
              <FontAwesomeIcon icon={faInstagram} /> 
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
