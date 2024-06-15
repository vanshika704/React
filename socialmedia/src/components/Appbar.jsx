import { NavLink } from 'react-router-dom';

import '../index.css';

const TabBar = () => {
    return (
        <div className="tab-bar d-flex justify-content-between align-items-center bg-dark p-3">
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
               
                <input type="text" className="form-control mr-2" />
                <button type="button" className="btn btn-outline-warning">Login</button>
                <button type="button" className="btn btn-warning mr-2">Signup</button>
            </div>
        </div>
    );
}

export default TabBar;
