import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Social } from "./social.jsx"; // Correctly import the Social component

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
                  <a className="dropdown-item" href="https://www.instagram.com/sharmavanshika__________?igsh=bmlyaHU5ZjB2NWt3">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.linkedin.com/in/vanshika-sharma-b1387428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                   Linkdin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://x.com/Vanshika310819?t=r3DQbhhaEJqFpATOyUismQ&s=09">
                    Tweeter
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
        <h5>I am Vanshika Sharma, a Btech Computer Science student.</h5><br />
        <h5>I work on Flutter, Firebase, React and Canva.</h5>
        <hr />
        <Social />
      </div>
    </div>
  );
}
