
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabBar from './components/Appbar';
import Footer from './components/footer';
// import Home from './Home'; // Import your components for each route
// import Features from './Features';
// import Pricing from './Pricing';
// import Faqs from './Faqs';
// import About from './About';
import './index.css'; // Ensure you import the CSS file for styles
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    // <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <TabBar />
        <div className="content flex-grow-1">
          <div className="container mt-3"> {/* Use Bootstrap container for content */}
            {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/features" component={Features} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/faqs" component={Faqs} />
              <Route path="/about" component={About} />
            </Switch> */}
            {/* Placeholder content */}
            <div>
              <h1>Welcome to our website</h1>
              <p>This is the placeholder content for the home page.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
