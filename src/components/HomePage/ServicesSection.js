import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>

<section className="service-area pt-100 pb-70" id="services-sec">
  <div className="container">
    {
      service.map(s=><div className="section-title text-center">
        <span>{s.servicesubHeading}</span>
        <h2>{s.serviceHeading}</h2>
      </div> )
    }
    
    <div className="row pt-45">

      {
        items.map(i=> <div className="col-lg-4 col-sm-6">
          <div className="service-card">
            <a href="service-details.html">
              <img src={i.serviceIcon} alt="Images" />
            </a>
            <a href="service-details.html">
              <h3>{i.serviceTitle}</h3>
            </a>
            <p>
            {i.serviceDetails}
            </p>
          </div>
        </div>)
      }

      
  
      
     
     
      
    </div>
  </div>
</section>


    </>


  );
};

export default ServicesSection;
