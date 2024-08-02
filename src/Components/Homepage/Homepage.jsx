// import React from 'react'
import "./Homepage.css";
import img1 from "../assets/slider-1.png";
import img2 from "../assets/slider.png";
import img3 from "../assets/slider-3.jpg";
import img4 from "../assets/recharge.png";
import img5 from "../assets/withdrawal.png";
import img6 from "../assets/invite.png";
import NavigationBar from "../NavigationBar/NavigationBar";

const Homepage = () => {
  return (
    <div className="container ">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide rounded-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active bg-light"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button className=" bg-light"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button className=" bg-light"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* card */}
      <div className="container-fluid my-5">
        <div className="container quick rounded-5 py-5 px-3">
          <div className="row gy-3 justify-content-center text-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button className="btn W-25 py-2 px-4 bg-transparent rounded-5 border-3 action">
                <img src={img4} className="img-fluid mb-3" alt="" />{" "}
                <span className="fw-bold text-light">Recharge Now</span>
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button className="btn W-25 py-3 px-4 bg-transparent rounded-5 action">
                <img src={img5} className="img-fluid mb-2" alt="" />{" "}
                <span className="fw-bold text-light">Quick Withdrawal</span>
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button className="btn W-25 py-2 px-4 bg-transparent rounded-5 action">
                <img src={img6} className="img-fluid mb-2" alt="" />{" "}
                <span className="fw-bold text-light">Invite Friend</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar/>
    </div>
  );
};

export default Homepage;
