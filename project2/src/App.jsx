import { Image as NextUIImage } from "@nextui-org/react";
import profileImage from './assets/profile.jpg';
import "./App.css";
import "./index.css";
import "./home.jsx";
import "./contact.jsx";
import "./portfolio.jsx";

function App() {
  return (
    <>
      <div className="navigation">
        <Navbar />
      </div>
      <div><hr></hr></div>
      <div className="image">
        <ProfileImage />
      </div>
      
    </>
  );
}

export default App;

function Navbar() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <ul className="navcontent">
      <li className="name">VANSHIKA</li>
      <li onClick={() => navigateTo("/home")} className="nav-item">Home</li>
      <li onClick={() => navigateTo("/about")} className="nav-item">About</li>
      <li onClick={() => navigateTo("/portfolio")} className="nav-item">Portfolio</li>
      <li onClick={() => navigateTo("/contact")} className="nav-item">Contact</li>
    </ul>
    
  );
}

function ProfileImage() {
  return (
    <div className="image">
      <NextUIImage
        isZoomed
        width={240}
        alt="NextUI Fruit Image with Zoom"
        src={profileImage}
      />
    </div>
  );
}
