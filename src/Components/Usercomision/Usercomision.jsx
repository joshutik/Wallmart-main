import "./Usercomision.css";
import slide1 from '../assets/slide-img-1.png'
import slide2 from '../assets/slide-img-2.png'
import slide3 from '../assets/slide-img-3.png'
import slide4 from '../assets/slide-img-4.png'

const Usercomision = () => {
  return (
    <div className="container pb-4">
      <div className="scroll-container">
        <div className="scroll-content">
          <div className="card border-0 mx-3 rounded-5 w-25 py-5 px-2 fw-bold">
            <div className="d-flex justify-content-around align-items-center">
            <img src={slide1} alt="" />
            <span>231***98465</span>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="my-3">Commission</p>
              <span className="btn rounded-5 comm fw-bold">$12.3</span>
            </div>
          </div>
          <div className="card border-0 mx-3 rounded-5 w-25 py-5 px-2 fw-bold">
            <div className="d-flex justify-content-around align-items-center">
            <img src={slide2} alt="" />
            <span>231***98465</span>  
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="my-3">Commission</p>
              <span className="btn rounded-5 comm fw-bold">$12.3</span>
            </div>
          </div>
          <div className="card fw-bold border-0 mx-3 rounded-5 w-25 py-5 px-2">
            <div className="d-flex justify-content-around align-items-center">
            <img src={slide3} alt="" />
            <span>231***98465</span>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="my-3">Commission</p>
              <span className="btn rounded-5 comm fw-bold">$12.3</span>
            </div>
          </div>
          <div className="card fw-bold border-0 mx-3 rounded-5 w-25 py-5 px-2">
            <div className="d-flex justify-content-around align-items-center">
            <img src={slide4} alt="" />
            <span>231***98465</span>
            </div>
            
            <div className="d-flex justify-content-around align-items-center">
              <p className="my-3">Commission</p>
              <span className="btn rounded-5 comm fw-bold">$12.3</span>
            </div>
          </div>
          <div className="card fw-bold border-0 mx-3 rounded-5 w-25 py-5 px-2">
           <div className="d-flex justify-content-around align-items-center">
           <img src={slide1} alt="" />
           <span>231***98465</span>
           </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="my-3">Commission</p>
              <span className="btn rounded-5 comm fw-bold">$12.3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercomision;
