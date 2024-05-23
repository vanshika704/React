import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
//import "bootstrap/dist/css/bootstrap.min.css";

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
              <div>Vanshika Sharma</div>
              <hr />
            </li>
            <li className="social">
              <FontAwesomeIcon icon={faInstagram} /> 
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <div className="card" style={{ width: "18rem" }}>
              <img src="assets/photo.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Explore Profile</p>
              <button className="Button">Lets Go!!</button>
            </div></div>
            </li>
          </ul>
         
          </div>
        </div>
      </div>
    
  );
}
