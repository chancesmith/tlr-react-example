import React from "react";

const Home = () => {
  return (
    <div>
      {/* <!--image carousel--> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="img/carousel1.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/carousel2.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="img/carousel3.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* <!--ahout section--> */}
      <div class="container">
        <div class="row">
          <div class="lost col-md-6">
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
          <div class="col-md-6">
            <img src="img/chase.jpg" class="chase" alt="chase" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <!--clearance card--> */}
      <div class="sales">
        <h1 class="display-4">Clearance!</h1>
        <p class="lead">Click Here for the Clearance Rack.</p>
        <a class="btn btn-primary btn-lg" href="sales.html" role="button">
          View Clearance
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <!--reviews--> */}
      <div class="reviews">
        <h1>See what people are saying!</h1>
        <br />
        <div class="accordion" id="accordionExample">
          <div class="reviews">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
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
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="media border p-3">
                  <img
                    src="img/justin.png"
                    alt="John Doe"
                    class="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div class="media-body">
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
          <div class="reviews">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
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
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="media border p-3">
                  <img
                    src="img/fernando2.png"
                    alt="John Doe"
                    class="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div class="media-body">
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
          <div class="reviews">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
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
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="media border p-3">
                  <img
                    src="img/kya.png"
                    alt="John Doe"
                    class="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div class="media-body">
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
          <div class="reviews">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
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
              class="collapse"
              aria-labelledby="headingfour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="media border p-3">
                  <img
                    src="img/austin.png"
                    alt="John Doe"
                    class="mr-3 mt-3 rounded-circle"
                    style={{ width: "60px" }}
                  />
                  <div class="media-body">
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
    </div>
  );
};

export default Home;
