import { CartWidget } from "./CartWidget";


export const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TomShop
          </a>

          <CartWidget />
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
                <a className="nav-link" href="#">
                  Guitars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pianos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Drums
                </a>

              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
};
