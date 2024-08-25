import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (




    <>



      <div className="price-area pt-100 pb-70" id='pricing-sec'>
        <div className="container">
          <div className="section-title text-center">
            <span>Pricing Table</span>
            <h2>We Have Pre-ready Pricing for Our Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 pt-45">
              <div className="tabs-item-list">

              </div>
            </div>
          </div>
          <div id="prices-content">
            <div id="monthly" className="active prices-content-area animated">
              <div className="row justify-content-center">

                {
                  pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-sm-6">
                    <div className="single-price">
                      <span>{b.packageName} Plan</span>
                      <div className="single-price-title">
                        <h2><sup>$</sup>{b.packagePrice}<sub>/USD</sub></h2>
                      </div>
                      <ul>
                        <li>{b.packagePointOne}</li>
                        <li>{b.packagePointTwo}</li>
                        <li>{b.packagePointThree}</li>
                        <li>{b.packagePointFour}</li>
                        <li>{b.packagePointFive}</li>

                      </ul>
                      <Link to={`/order-now/${b._id}`} className="get-btn">{b.packageButtonText}</Link>
                    </div>
                  </div>)}


                {
                  pricing.map(p => p.packageName === 'Premium' && <div className="col-lg-4 col-sm-6">
                    <div className="single-price current">
                      <span>{p.packageName} Plan</span>
                      <div className="single-price-title">
                        <h2><sup>$</sup>{p.packagePrice}<sub>/USD</sub></h2>
                      </div>
                      <ul>
                        <li>{p.packagePointOne}</li>
                        <li>{p.packagePointTwo}</li>
                        <li>{p.packagePointThree}</li>
                        <li>{p.packagePointFour}</li>
                        <li>{p.packagePointFive}</li>
                        <li>{p.packagePointSix}</li>
                        
                      </ul>
                      <Link to={`/order-now/${p._id}`} className="get-btn">{p.packageButtonText}</Link>
                    </div>
                  </div>)}

                {
                  pricing.map(s => s.packageName === 'Standard' && <div className="col-lg-4 col-sm-6  ">
                    <div className="single-price">
                      <span>{s.packageName} Plan</span>
                      <div className="single-price-title">
                        <h2><sup>$</sup>{s.packagePrice}<sub>/USD</sub></h2>
                      </div>
                      <ul>
                        <li>{s.packagePointOne}</li>
                        <li>{s.packagePointTwo}</li>
                        <li>{s.packagePointThree}</li>
                        <li>{s.packagePointFour}</li>
                        <li>{s.packagePointFive}</li>
                       
                      </ul>
                      <Link to={`/order-now/${s._id}`} className="get-btn">{s.packageButtonText}</Link>
                    </div>
                  </div>)}




              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;