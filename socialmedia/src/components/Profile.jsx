import "../index.css";
import { FaUserPlus, FaLink } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

function Profile() {
  return (
    <div className="Profile">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="brand-icon-text">
              <FaUserPlus size={40} /> Sam774
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <CiSquarePlus size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaLink size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <CgDetailsMore size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="avatar-and-table">
        <div className="avatar">
          <Wrap>
            <WrapItem>
              <Avatar size='3xl' name='Sam' src='https://bit.ly/dan-abramov' />
            </WrapItem>
          </Wrap>
        </div>
        <div className="table-container">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Followers</th>
                <th>Following</th>
                <th>Posts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>360</td>
                <td>150</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
