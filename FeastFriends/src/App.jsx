

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MainPage from './Page2';
import Menu from './Menu';
import Partners from './partners';
import Explore from './explore';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Page2" element={<MainPage />} />
        <Route path="/" element={<Home />} />
        <Route path ="/menu" element={<Menu/>} />
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <><div className='login'>
      <Logo />
      <Credentials />
      </div></>
  );
}

function Logo() {
  return (
    <div className="logo"></div>
  );
}

function Credentials() {
  return (
    <div className="credentials">
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <Link to="/Page2">
        <button className="custom-button">Sign In with Google</button>
      </Link>
    </div>
  );
}

export default App;
