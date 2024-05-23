
import './index.css'; 

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="elements">
        <li className="home">Home</li>
        <li className="about">About</li>
        <li className="blogs">Blogs</li>
        <li className="skills">Skills</li>
      </ul>
    </nav>
  );
}

export default App;
