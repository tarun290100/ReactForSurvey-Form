import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {
  let navStyle = {
    border: "1px solid grey",
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      style={navStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
Header.defaultProps = {
  title: "your title",
  searchBar: true,
};
