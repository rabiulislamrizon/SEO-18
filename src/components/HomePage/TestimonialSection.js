import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (



    <>

      <div className="testimonial-area pt-100 pb-70">
        <div className="container-fluid">

          {
            testimonialtext.map(t => <div className="section-title text-center">
              <span>{t.testimonialText}</span>
              <h2>{t.testimonialHeading}</h2>
            </div>)
          }



          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-xxl-6">
              <div className="testimonial-slider">
                <div className="testimonial-icon">
                  <i className="bx bxs-quote-alt-right" />
                </div>
                <div className="testimonial-item-slider ">
                  {
                    testimonial.map(a => <div className="testimonial-item">
                      <div className="testimonial-item-img">
                        <img src={a.image} alt="Testimonial Images" />
                      </div>
                      <h3>
                        {a.personName}
                      </h3>
                      <h6>
                        {a.personTitle}
                      </h6>
                      <p>
                        {a.desc}
                      </p>
                    </div>)
                  }



                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-6">
              <div className="testimonial-img">
                <img src="assets/img/testimonial/1.png" alt="Testimonial Images" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-left">
          <img src="assets/img/testimonial/shape-left.png" alt="Images" />
        </div>
        <div className="shape-right">
          <img src="assets/img/testimonial/shape-right.png" alt="Images" />
        </div>
      </div>


    </>



  );
};

export default TestimonialSection;
