

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
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
