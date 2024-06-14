import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppBar from './AppBar';
import Home from './Home'; 
import Features from './Features';
import Pricing from './Pricing';
import Faqs from './Faqs';
import About from './About';

function App() {
  return (
    <Router>
      <AppBar />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
