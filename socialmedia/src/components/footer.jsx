import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css'; 

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between align-items-center bg-dark p-3">
            <div className="company-info d-flex align-items-center">
                <img src="/path/to/logo.png" alt="Company Logo" className="logo mr-2" />
                <span className="company-name text-white">Company Name</span>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
