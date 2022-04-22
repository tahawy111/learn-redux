import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="li">
          Amer Tahawy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="li">
                Hello {name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
