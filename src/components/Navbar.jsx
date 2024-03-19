import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { brandTitle, menu } from "../config/config";

const Navbar = () => {

  const navigate = useNavigate()
  const [query,setQuery] = useState('')

  const searchForm = e => {
    e.preventDefault()
    navigate('/search/'+query)
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{brandTitle}</Link>
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
            {menu.map((item,i) => (
              <li className="nav-item" key={v4()}>
                <Link className="nav-link" to={item.link} key={v4()}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search" onSubmit={searchForm}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
