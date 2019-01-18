import React, { Component } from "react";
import "./Nav.css";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Bot Be Gone
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <img
              className="fit-picture"
              src="https://image.flaticon.com/icons/svg/78/78073.svg"
            />
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link placeholder" href="#">
              {" "}
              Placeholder
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// Navbar.propTypes = {
//   // title: PropTypes.string.isRequired,
//   // overview: PropTypes.string,
//   // imageUrl: PropTypes.string,
//   // isInLibrary: PropTypes.bool, //check to see if in library and rentable
//   // id: PropTypes.number,
//   // onSelectMovie: PropTypes.func,
//   // onRentalSelect: PropTypes.func,
//   //isInSearch: PropTypes.bool,
// };

export default Nav;
