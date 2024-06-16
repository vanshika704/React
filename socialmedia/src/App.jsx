
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddPost from './components/addpost';

import './index.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Addpost" element={<AddPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
