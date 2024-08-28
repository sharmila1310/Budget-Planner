import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import addrss1 from "../../assets/images/addrss.jpg";
import locationIcon from "../../assets/images/location.png";
import timeIcon from "../../assets/images/clock.png";
import userIcon from "../../assets/images/user.png";
import mrfIcon from "../../assets/images/clients/c_mrf.webp";
import ceatIcon from "../../assets/images/clients/c_ceat.jpg";
import goodyearIcon from "../../assets/images/clients/c_goodyear.png";
import apolloIcon from "../../assets/images/clients/c_apollo.png";
import bstoneIcon from "../../assets/images/clients/c_bridgestone.png";
import jkIcon from "../../assets/images/clients/c_jktyre.png";
import wheelBalanceIcon from "../../assets/images/clients/wheelBalancing.png";
import wheelAlignmentIcon from "../../assets/images/clients/wheelAlignment.png";
import tyreIcon from "../../assets/images/tyre.jpg";
import starIcon from "../../assets/images/star.png";
import tickIcon from "../../assets/images/tick.png";
import verificationIcon from "../../assets/images/verification.png";

const Home = () => {
  return (
    <div className="home-main-con">
      <div className="home-main-wrapper">
        {/* hero con */}
        <div className="hero-con shadow-sm rounded p-3">
          <div className="hero-top d-flex justify-content-center">
            <div className="left w-50 pe-2">
              <p className="fw-bold fs-5 d-flex">
                SHREE HEMKUNT TYRES AND SERVICES{" "}
                <span className="verified_span">
                  <img src={verificationIcon} alt="verificationIcon" /> Verified
                </span>
              </p>
              {/* Rating */}
              <div className="d-flex align-items-center">
                <span className="rating-span px-2 rounded text-white me-2">
                  4.9
                </span>
                <ReactStars
                  count={5}
                  //   onChange={ratingChanged}
                  size={24}
                  color="#cdc8c8"
                  activeColor="#ffd700"
                  isHalf={true}
                  value={5}
                />
                <Link className="ms-2">
                  <span className="review_span">2278 Reviews</span>
                </Link>
              </div>
              {/* Address */}
              <div className="address-con d-flex">
                <img src={locationIcon} alt="location" />
                <p>
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              {/* Time */}
              <div className="address-con d-flex">
                <img src={timeIcon} alt="location" />
                <p>Open - Monday to Sunday - 10:00AM to 8:00PM</p>
              </div>

              <Link
                to="https://www.google.com/maps/place/CEAT%20Shoppe,%20Shree%20Hemkunt%20Tyres%20And%20Services/@28.6426711,77.3789929,15z/data=!4m2!3m1!1s0x0:0xc268cb9ed2106c69?sa=X&ved=2ahUKEwizo8LqydjzAhXRSH0KHQyoDsMQ_BJ6BAhrEAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn border border-danger text-danger w-50 fw-bolder mt-3">
                  Get Directions
                </button>
              </Link>
            </div>

            {/* Right Con */}
            <div className="right w-50 d-flex justify-content-center">
              <img src={addrss1} alt="pictures" />
              <img src={addrss1} alt="pictures" />
            </div>
          </div>

          {/* Hero bottom */}
          <div className="hero-bottom mt-5">
            <p className="">2278 Google Reviews</p>
            <div className="review-con d-flex ">
              {/* Card */}
              <div className="card review-card p-2">
                <div className="user-con d-flex align-items-center">
                  <img className="user-img" src={userIcon} alt="user" />
                  <span className="fw-bold">Md Tauqueer</span>
                </div>
                <p className="mt-3">
                  Excellent service from start to finish. 100% satisfaction with
                  the job, professionalism and overall service.We were delighted
                  with your courteous , prompt and professional
                </p>
              </div>
              <div className="card review-card p-2">
                <div className="user-con d-flex align-items-center">
                  <img className="user-img" src={userIcon} alt="user" />
                  <span className="fw-bold">Md Tauqueer</span>
                </div>
                <p className="mt-3">
                  Excellent service from start to finish. 100% satisfaction with
                  the job, professionalism and overall service.We were delighted
                  with your courteous , prompt and professional
                </p>
              </div>
              <div className="card review-card p-2">
                <div className="user-con d-flex align-items-center">
                  <img className="user-img" src={userIcon} alt="user" />
                  <span className="fw-bold">Md Tauqueer</span>
                </div>
                <p className="mt-3">
                  Excellent service from start to finish. 100% satisfaction with
                  the job, professionalism and overall service.We were delighted
                  with your courteous , prompt and professional
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* client con */}
        <div className="client-con shadow-sm rounded p-3 mt-4">
          <p className="fw-bold">Deals in</p>
          <div className="client-card-con d-flex">
            <div className="client-card">
              <img src={mrfIcon} alt="client" />
              <span>MRF</span>
            </div>
            <div className="client-card">
              <img src={ceatIcon} alt="client" />
              <span>CEAT</span>
            </div>
            <div className="client-card">
              <img src={goodyearIcon} alt="client" />
              <span>Goodyear</span>
            </div>
            <div className="client-card">
              <img src={apolloIcon} alt="client" />
              <span>Apollo</span>
            </div>
            <div className="client-card">
              <img src={bstoneIcon} alt="client" />
              <span>Bridgestone</span>
            </div>
            <div className="client-card">
              <img src={jkIcon} alt="client" />
              <span>JK Tyre</span>
            </div>
          </div>
        </div>
        {/* Services offered con */}
        <div className="services-con shadow-sm rounded p-3 mt-4">
          <p className="fw-bold">Services offered by this dealer</p>
          <div className="services-card-con d-flex">
            <div className="services-card">
              <img src={wheelBalanceIcon} alt="dealer-icon" />
              <span>Wheel Balanceing</span>
              <button className="btn btn-danger">Book Now</button>
            </div>
            <div className="services-card">
              <img src={wheelAlignmentIcon} alt="dealer-icon" />
              <span>Wheel Alignment</span>
              <button className="btn btn-danger">Book Now</button>
            </div>
          </div>
        </div>
        {/* Tyres sold by dealer */}
        <div className="sold-con p-3 mt-4">
          <p className="fw-bold">Tyres sold by this Dealer</p>
          <div className="sold-card-con d-flex flex-wrap">
            <div className="sold-card d-flex">
              <div className="content-side">
                <h2>apollo</h2>
                <span className="d-block common_span">AMAZER 4G LIFE</span>

                <span
                  className="d-block"
                  style={{ color: "#8b8995", padding: "20px 0px" }}
                >
                  145/80 R12
                </span>
                {/* rating */}
                <div className="rating-div d-flex align-items-center">
                  <span>
                    <img src={starIcon} alt="star" /> 4
                  </span>
                  <span>320 Reviews</span>
                </div>
                <span className="d-block fw-bold common_span">
                  &#8377; 3,136
                </span>
                <span
                  className="d-block py-2"
                  style={{ color: "#52aa5b", fontSize: "13px" }}
                >
                  Offer availabe
                </span>
                <span className="d-block" style={{ color: "#a0a0a0" }}>
                  Tube Tyre
                </span>

                <div className="warranty-div position-absolute">
                  <span>
                    {" "}
                    <img src={tickIcon} alt="tick" />5 Years Warranty
                  </span>
                </div>
                <img
                  className="tyre-img position-absolute"
                  src={tyreIcon}
                  alt="tyre"
                />
              </div>
            </div>
            <div className="sold-card d-flex">
              <div className="content-side">
                <h2>apollo</h2>
                <span className="d-block common_span">AMAZER 4G LIFE</span>

                <span
                  className="d-block"
                  style={{ color: "#8b8995", padding: "20px 0px" }}
                >
                  145/80 R12
                </span>
                {/* rating */}
                <div className="rating-div d-flex align-items-center">
                  <span>
                    <img src={starIcon} alt="star" /> 4
                  </span>
                  <span>320 Reviews</span>
                </div>
                <span className="d-block fw-bold common_span">
                  &#8377; 3,136
                </span>
                <span
                  className="d-block py-2"
                  style={{ color: "#52aa5b", fontSize: "13px" }}
                >
                  Offer availabe
                </span>
                <span className="d-block" style={{ color: "#a0a0a0" }}>
                  Tube Tyre
                </span>

                <div className="warranty-div position-absolute">
                  <span>
                    {" "}
                    <img src={tickIcon} alt="tick" />5 Years Warranty
                  </span>
                </div>
                <img
                  className="tyre-img position-absolute"
                  src={tyreIcon}
                  alt="tyre"
                />
              </div>
            </div>
            <div className="sold-card d-flex">
              <div className="content-side">
                <h2>apollo</h2>
                <span className="d-block common_span">AMAZER 4G LIFE</span>

                <span
                  className="d-block"
                  style={{ color: "#8b8995", padding: "20px 0px" }}
                >
                  145/80 R12
                </span>
                {/* rating */}
                <div className="rating-div d-flex align-items-center">
                  <span>
                    <img src={starIcon} alt="star" /> 4
                  </span>
                  <span>320 Reviews</span>
                </div>
                <span className="d-block fw-bold common_span">
                  &#8377; 3,136
                </span>
                <span
                  className="d-block py-2"
                  style={{ color: "#52aa5b", fontSize: "13px" }}
                >
                  Offer availabe
                </span>
                <span className="d-block" style={{ color: "#a0a0a0" }}>
                  Tube Tyre
                </span>

                <div className="warranty-div position-absolute">
                  <span>
                    {" "}
                    <img src={tickIcon} alt="tick" />5 Years Warranty
                  </span>
                </div>
                <img
                  className="tyre-img position-absolute"
                  src={tyreIcon}
                  alt="tyre"
                />
              </div>
            </div>
            <div className="sold-card d-flex">
              <div className="content-side">
                <h2>apollo</h2>
                <span className="d-block common_span">AMAZER 4G LIFE</span>

                <span
                  className="d-block"
                  style={{ color: "#8b8995", padding: "20px 0px" }}
                >
                  145/80 R12
                </span>
                {/* rating */}
                <div className="rating-div d-flex align-items-center">
                  <span>
                    <img src={starIcon} alt="star" /> 4
                  </span>
                  <span>320 Reviews</span>
                </div>
                <span className="d-block fw-bold common_span">
                  &#8377; 3,136
                </span>
                <span
                  className="d-block py-2"
                  style={{ color: "#52aa5b", fontSize: "13px" }}
                >
                  Offer availabe
                </span>
                <span className="d-block" style={{ color: "#a0a0a0" }}>
                  Tube Tyre
                </span>

                <div className="warranty-div position-absolute">
                  <span>
                    {" "}
                    <img src={tickIcon} alt="tick" />5 Years Warranty
                  </span>
                </div>
                <img
                  className="tyre-img position-absolute"
                  src={tyreIcon}
                  alt="tyre"
                />
              </div>
            </div>
          </div>
        </div>
        <div>Payment Mode</div>
      </div>
    </div>
  );
};

export default Home;
