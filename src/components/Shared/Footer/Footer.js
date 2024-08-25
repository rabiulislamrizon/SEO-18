import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers Request is Sent');
      });


  }




  return (


    <>
    {
      footerSocial.map(e=>  <footer id="footer" className="footer-area bg-footer mt-50">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="footer-single">

                  <div className="footer-single-content footer-list">
                  <h3>About Us</h3>
                    <p>{e.aboutText}</p>
                  </div>
                  <div className="newsletter-area">
                    <form className="newsletter-form" onSubmit={handleSubscriber}>
                      <input type="email" className="form-control" placeholder="Email" name="subemail" required autoComplete="off" />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                      <div id="validator-newsletter" className="form-result" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-list ml-50">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="#services-sec">Services</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="#about-sec">About Us</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="#pricing-sec"> Pricing</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="#contact-sec">Contact us </a>
                    </li>

                  </ul>
                </div>
              </div>

              {
                footerAddress.map(a => <div className="col-lg-4 col-md-6">
                  <div className="footer-list ml-20">
                    <h3>Contact Us</h3>
                    <ul>
                      <li>
                        <i className="bx bxs-chevron-right" />
                        <a href="/">{a.phoneNumber}</a>
                      </li>

                      <li>
                        <i className="bx bxs-chevron-right" />
                        <a href="/">{a.emailAddress}</a>
                      </li>
                      <li>
                        <i className="bx bxs-chevron-right" />
                        {a.location}
                      </li>
                    </ul>
                  </div>
                </div>)
              }



            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12">
                {
                  footerCopyright.map(c => <div className="bottom-text text-center">
                    <p>{c.copyrightText} </p>
                  </div>)
                }

              </div>
            </div>
          </div>
        </div>
      </footer>)
    }
     









    </>
  );
};

export default Footer;
