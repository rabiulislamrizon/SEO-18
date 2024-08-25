import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Message is Send');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (





    <>

      


<section className="contact-section mt-100 pb-100">
  <div className="container">
    <div className="section-title text-center">
      <span>Contact Us</span>
      <h2>Drop A Message For Any Query</h2>
      
    </div>
    <div className="contact-wrap pt-45">
      <div className="contact-wrap-form">
        <form onSubmit={handleMessage}  id="contact-sec">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <input type="text" name="number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <input type="text" name="subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
              <input  name="messageStatus"  value="UnRead" hidden placeholder="Message Status" />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 text-center">
              <button type="submit" className="default-btn page-btn text-center">
                Send Message
              </button>
              <div id="msgSubmit" className="h3 text-center hidden" />
              <div className="clearfix" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



    </>





  );
};

export default ContactUs;