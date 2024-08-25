import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>

    {
      banners.map(b=>  <div className="main-banner">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <span>{b.bannerText}</span>
                <h1>{b.bannerHeading}</h1>
                <p>
                {b.bannerDetails}
                </p>
                <div className="banner-btn">
                  <a href={b.buttonURL} className="default-btn">{b.buttonText}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <img src={b.imageOne} alt="Banner Images" />
              </div>
            </div>
            <div className="banner-shape-1">
              <img src="assets/img/shape/home1.png" alt="Banner Shape" />
            </div>
          </div>
        </div>
        <div className="home-shape">
          <div className="shape1">
            <img src="assets/img/shape/1.png" alt="shape" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/2.png" alt="shape" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/3.png" alt="shape" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/4.png" alt="shape" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape/5.png" alt="shape" />
          </div>
          <div className="shape6">
            <img src="assets/img/shape/6.png" alt="shape" />
          </div>
          <div className="shape7">
            <img src="assets/img/shape/3.png" alt="shape" />
          </div>
        </div>
      </div>)
    }

  



    </>
  );
};

export default Banner;
