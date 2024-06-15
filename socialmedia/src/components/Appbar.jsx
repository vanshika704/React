import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
const TabBar = () => {
    return (
        <div className="tab-bar d-flex justify-content-between align-items-center bg-light p-3">
            <div className="tab-links">
                <NavLink exact to="/" className="tab-link" activeClassName="active">Home</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/features" className="tab-link" activeClassName="active">Features</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/pricing" className="tab-link" activeClassName="active">Pricing</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/faqs" className="tab-link" activeClassName="active">FAQs</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/about" className="tab-link" activeClassName="active">About</NavLink>
            </div>
            <div className="search-bar d-flex align-items-center ml-auto">
                <button type="button" className="btn btn-primary mr-2">Search</button>
                <input type="text" className="form-control mr-2" placeholder="Search..." />
                <button type="button" className="btn btn-outline-primary">Login</button>
            </div>
        </div>
    );
}

export default TabBar;
