import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";



export const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TomShop
          </Link>
          <Link className="nav-link" to="/CartContainer">
          <CartWidget />

          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ItemListContainer">
                  All Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ItemListContainer/Guitar">
                  Guitars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ItemListContainer/Bass">
                  Bass
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>

              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
};
