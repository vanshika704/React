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
      <hr /> {/* Move the <hr> tag here */}
      <div className="content">
        <div className="image">
          <ProfileImage />
        </div>
        <div className="intro">
          <Intro />
        </div>
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
    <NextUIImage
      isZoomed
      width={240}
      alt="NextUI Fruit Image with Zoom"
      src={profileImage}
    />
  );
}

function Intro() {
  return (
    <div className="intro-card">
      <div className="intro-content">
        <h2>Hi Everyone! I am Vanshika Sharma, a Btech CSE student at<br></br> Maharishi Markendeshwar (Deemed to be University).</h2>
        <p>I love to explore and work on new technologies.<br></br> I am a core team member of Google Developers Student Clubs.</p>
      </div>
    </div>
  );
}
