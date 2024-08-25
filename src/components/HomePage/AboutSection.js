import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

    {
      about.map(a=> <div className="about-area pt-100 pb-70" id="about-sec">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-xxl-6 ps-0">
              <div className="about-img">
                <img src={a.aboutImgOne} alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6">
              <div className="about-content about-width">
                <span>{a.aboutText}</span>
                <h2>{a.aboutHeading}</h2>
                <p>
                {a.aboutDetails}
                </p>
                <li>{a.pointOne}</li>
                <li>{a.pointTwo}</li>
                <li>{a.pointThree}</li>
                <li>{a.pointFour}</li>
                <li>{a.pointFive}</li>
                <div className="about-btn">
                  <a href="#contact-sec" className="default-btn">Contact Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <img src="assets/img/shape/right-side.png" alt="Shape Images" />
        </div>
      </div>)
    }
   

      

    </>
  );
};

export default AboutSection;
