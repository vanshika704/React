import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
              <Image/>
            
            </li>
          </ul>
         
          </div>
        </div>
      </div>
  
  );
}
function Image(){
  return(<><div className="imagephotu"></div></>)
}
