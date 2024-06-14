
import { NavLink } from 'react-router-dom';

const TabBar = () => {
    return (
        <div className="tab-bar d-flex justify-content-between align-items-center bg-light p-3">
            <div className="tab-links">
                <NavLink exact to="/" className="tab-link" activeClassName="active">Home</NavLink>
                <NavLink to="/features" className="tab-link ml-3" activeClassName="active">Features</NavLink>
                <NavLink to="/pricing" className="tab-link ml-3" activeClassName="active">Pricing</NavLink>
                <NavLink to="/faqs" className="tab-link ml-3" activeClassName="active">FAQs</NavLink>
                <NavLink to="/about" className="tab-link ml-3" activeClassName="active">About</NavLink>
            </div>
            <div className="search-bar d-flex align-items-center ml-auto">
                <input type="text" className="form-control mr-2" placeholder="Search..." />
                <button type="button" className="btn btn-primary mr-2">Search</button>
                <button type="button" className="btn btn-outline-primary">Login</button>
            </div>
        </div>
    );
}

export default TabBar;
