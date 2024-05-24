import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <ul>
      <li><Navbar /></li>
      <li><Image /></li>
      <li><Intro /></li>
    </ul>
  );
}

export default App;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
         Vanshika Sharma
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Social Media
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Image() {
  return (
    <div className="profileimage"></div>
  );
}

function Intro() {
  return (
    <div className="intro">
      
      <div className="saaman">
        <h1 className="hello">HI Everyone!!!</h1>
        <br />
        <h4>I am Vanshika Sharma, a Btech Computer Science student.</h4><br></br>
        <h4>I work on Flutter,Firebase,React and Canva.</h4>
        <hr></hr><div className="socialmedia"><div className="insta">
        <FontAwesomeIcon icon={faInstagram} /></div>
        <div className="linkdin"><FontAwesomeIcon icon={faLinkedin} /></div>
        <div className="tweeter"><FontAwesomeIcon icon={faTwitter} /></div>
      </div></div>
      <button ></button>
    </div>
  );
}
