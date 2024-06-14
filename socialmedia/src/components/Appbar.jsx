
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Your Logo or Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/features">Features</Nav.Link>
          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
          <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Button variant="outline-primary" className="ml-2">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppBar;
