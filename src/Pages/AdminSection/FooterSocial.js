import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const FooterSocial = () => {

    const [footersocial, setFootersocial] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/footer-social`)
            .then((res) => res.json())
            .then((info) => setFootersocial(info));
    }, []);


    const handleFootersocial = (event) => {
        event.preventDefault();

        const aboutText = event.target.aboutText.value;
        const youlink = event.target.youlink.value;
         const fblink = event.target.fblink.value;
         const inslink = event.target.inslink.value;





        const footerSection = {

            aboutText,
            youlink,
            fblink,
            inslink,
           





        };

        const url = `http://localhost:5000/add-footer-social`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(footerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Social Link is Updated');
            });
    };



    return (

       
       <>
       <HeaderBottom></HeaderBottom>
        <div className='container '>
            <section id="services" class="services-area vh-100" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update Footer Socail Link </h2>
                            {
                                footersocial.length === 1 &&
                                <>
                                    {
                                        footersocial.map(c =>
                                            footersocial.map(c =>
                                                <Link className='default-btn' to={`/edit-social-footer/${c._id}`}> Edit Social URL </Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footersocial.length === 0 &&


                                <form class="contact-form " onSubmit={handleFootersocial}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="aboutText" placeholder=" About Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="youlink" placeholder=" Youtube URL" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text" className="form-control" name="fblink" placeholder=" Facebook URL" required />
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="inslink" placeholder=" Instagram URL" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button class="default-btn" data-delay=".8s"> Add Footer Social </button>
                                        </div>
                                    </div>

                                </form>
                            }

                        </div>


                    </div>
                </div>


            </section>
        </div></>
    );
};

export default FooterSocial;