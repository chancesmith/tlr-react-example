import React from "react";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Sales from "./pages/Sales";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <NavLink className="rack" to="/sales">
            <h9>
              <blink>Clearance Rack!</blink>
            </h9>
          </NavLink>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <!--navbar--> */}
        <nav className="navbar navbar-expand-lg navbar sticky-top ">
          <a className="navbar-brand" href="index.html">
            <img src="img/tlr2.jpg" id="tlr-logo" />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                  {/* <span className="sr-only">(current)</span> */}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tees.html">
                  Tees
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tanks.html">
                  Tanks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shirts.html">
                  Shirts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sweatshirts.html">
                  Sweatshirts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="jackets.html">
                  Jackets
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
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="sports.html">
                    Sports
                  </a>
                  <a className="dropdown-item" href="nascar.html">
                    Nascar
                  </a>
                  <a className="dropdown-item" href="harley.html">
                    Harley Davidson
                  </a>
                  <a className="dropdown-item" href="band.html">
                    Band Tees
                  </a>
                  <a className="dropdown-item" href="festival.html">
                    Festival/Camp
                  </a>
                </div>
              </li>
            </ul>
            <NavLink
              className="btn btn-primary btn-lg"
              to="/sales"
              role="button"
            >
              Clearance
            </NavLink>
          </div>
          <div className="reserve">
            <form action="reserve.html">
              <input
                type="image"
                src="img/reserve2.jpg"
                alt="Submit"
                width="48"
                height="48"
              />
            </form>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/index" exact component={Home} />
          <Route path="/sales" exact component={Sales} />
        </Switch>

        {/* <!--footer--> */}
        <footer className="container-fluid text-center">
          <div className="row">
            <div className="col-sm-4">
              <h3>Contact Us</h3>
              <br />
              <h11>202 W Lafayette St suite b, Jackson, TN 38301</h11>
              <br />
              <br />
              <h11>(731) 803-2247</h11>
            </div>
            <div className="col-sm-4">
              <h3>Connect</h3>
              <a href="https://www.facebook.com/TheLostReserve/">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.instagram.com/tlrvintage/?hl=en">
                <i className="fa fa-instagram" />
              </a>
            </div>
            <div className="col-sm-4">
              <img src="img/tlr2.jpg" className="logo" alt="logo" />
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
