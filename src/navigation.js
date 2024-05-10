import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/iskon">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/iskon/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/iskon/temple">
              Temple
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/iskon/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 