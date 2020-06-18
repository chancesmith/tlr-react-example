import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <a className="rack" href="sales.html">
          <h9>
            <blink>Clearance Rack!</blink>
          </h9>
        </a>
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
          <img src="img/tlr2.jpg" id="tlr-logo" alt="tlr logo" />
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
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
          <a className="btn btn-primary btn-lg" href="sales.html" role="button">
            Clearance
          </a>
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
      {/* <!--image carousel--> */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="img/carousel1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="img/carousel2.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="img/carousel3.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!--ahout section--> */}
      <div className="container">
        <div className="row">
          <div className="lost col-md-6">
            <h4>About The Lost Reserve</h4>
            <h10>
              If you're on this page right now, I would like to sincerly thank
              you for visiting us at The Lost Reserve. Whether you've been in
              the hometown store, or are just now visitng us online, you should
              know that we're all about good vibes and good vintage.. So take a
              look around, don't be afraid to contact us with any questions, and
              enjoy your time with us at TLR... Get Lost!
            </h10>
          </div>
          <div className="col-md-6">
            <img src="img/chase.jpg" className="chase" alt="chase" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <!--clearance card--> */}
      <div className="sales">
        <h1 className="display-4">Clearance!</h1>
        <p className="lead">Click Here for the Clearance Rack.</p>
        <a className="btn btn-primary btn-lg" href="sales.html" role="button">
          View Clearance
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <!--reviews--> */}
      <div className="reviews">
        <h1>See what people are saying!</h1>
        <br />
        <div className="accordion" id="accordionExample">
          <div className="reviews">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Check out this amazing review from Justin Renfroe!
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="media border p-3">
                  <img
                    src="img/justin.png"
                    alt="John Doe"
                    className="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div className="media-body">
                    <h3>
                      Justin Renfroe
                      <small>
                        <i> 9 months ago</i>
                      </small>
                    </h3>
                    <p>
                      Great store with tons of vintage options that are all in
                      great condition and reasonably priced. This store is a gem
                      and one of the main reasons I'll drive from Nashville to
                      Jackson. The owner is super awesome too and knows his
                      items really well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Check out this amazing review from Fernando Puentes!
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="media border p-3">
                  <img
                    src="img/fernando2.png"
                    alt="John Doe"
                    className="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div className="media-body">
                    <h3>
                      Fernando Puentes
                      <small>
                        <i> 6 months ago</i>
                      </small>
                    </h3>
                    <p>
                      Great prices and an even better selection of clothing! I
                      always find something when I visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Check out this amazing review from Kya G.!
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="media border p-3">
                  <img
                    src="img/kya.png"
                    alt="John Doe"
                    className="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div className="media-body">
                    <h3>
                      Kya G.
                      <small>
                        <i> 8 months ago</i>
                      </small>
                    </h3>
                    <p>
                      Dope clothing etc ; I love that Jackson finally have a
                      millennium clothing thrift store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Check out this amazing review from Austin Thompson!
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingfour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="media border p-3">
                  <img
                    src="img/austin.png"
                    alt="John Doe"
                    className="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div className="media-body">
                    <h3>
                      Austin Thompson
                      <small>
                        <i> a year ago</i>
                      </small>
                    </h3>
                    <p>
                      A store full of hidden gems. The best part is that every
                      time I come in I see something new. I'm so glad this place
                      is open in downtown Jackson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

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
  );
};

export default Home;
