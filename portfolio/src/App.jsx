import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Social } from './social.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blogs />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vanshika Sharma
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/introduction">
                Introduction
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Social Media
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://www.instagram.com/sharmavanshika__________?igsh=bmlyaHU5ZjB2NWt3">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <a className="dropdown-item" href="https://www.linkedin.com/in/vanshika-sharma-b1387428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a className="dropdown-item" href="https://x.com/Vanshika310819?t=r3DQbhhaEJqFpATOyUismQ&s=09">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Image />
      <Intro />
    </div>
  );
}



function Introduction() {
  return (<div><Image1></Image1>
    <div className="introduction">
      <div className="intro-content">
        <div className="about">
          <p>
            <strong>About Me</strong><br />
            Hello! I am Vanshika, a B.Tech Computer Science and Engineering student<br /> 
            with a passion for technology and innovation.<br /> 
            My journey in the tech world is driven by an insatiable curiosity<br /> 
            and a desire to explore and learn new technologies.<br />
          </p>
          <p>
            I Work On:
            <ul>
              <li><strong>Flutter:</strong> Crafting beautiful, natively compiled applications for mobile, web, and desktop.</li>
              <li><strong>Firebase:</strong> Utilizing this powerful platform to build and manage scalable apps.</li>
              <li><strong>React:</strong> Creating dynamic and responsive user interfaces for web applications.</li>
              <li><strong>More:</strong>C, C++, Javascript , Python , Html , CSS,Bootstrap , Chakra , Tailwind . </li>
            </ul>
          </p>
          <p>
            I am always eager to dive into the latest tech trends and<br />  
            am constantly seeking new opportunities to grow and make an impact.
          </p>
          <p>
            Lets connect and explore the limitless possibilities of technology together!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return <div className="introimage"></div>;
}



function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <p>This is the Skills page.</p>
    </div>
  );
}

function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <p>This is the Blogs page.</p>
    </div>
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
        <h5>I am Vanshika Sharma, a Btech Computer Science student.</h5>
        <br />
        <h5>I work on Flutter, Firebase, React and Canva.</h5>
        <hr />
        <Social />
      </div>
    </div>
  );
}
