

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import TabBar from './components/Appbar';
// import Home from './Home'; // Import your components for each route
// import Features from './Features';
// import Pricing from './Pricing';
// import Faqs from './Faqs';
// import About from './About';

function App() {
  return (
    // <Router>
      <TabBar />
      // <div className="container mt-3"> {/* Use Bootstrap container for content */}
      //   <Switch>
      //     <Route exact path="/" component={Home} />
      //     <Route path="/features" component={Features} />
      //     <Route path="/pricing" component={Pricing} />
      //     <Route path="/faqs" component={Faqs} />
      //     <Route path="/about" component={About} />
      //   </Switch>
      // </div>
    // </Router>
  );
}

export default App;
