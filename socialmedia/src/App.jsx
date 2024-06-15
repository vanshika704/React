
import 'bootstrap/dist/css/bootstrap.min.css';
import TabBar from './components/Appbar';
import Footer from './components/footer';
import Sidebar from './components/sidebar'; 
import './index.css';

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <TabBar />
      <div className="content flex-grow-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar /> {/* Sidebar component added here */}
            </div>
            <div className="col-md-9">
              <div className="container mt-3">
                <h1>Welcome to our website</h1>
                <p>This is the placeholder content for the home page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
