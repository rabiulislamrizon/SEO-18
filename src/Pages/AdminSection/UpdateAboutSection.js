import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImgOne = event.target.aboutImgOne.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutText = event.target.aboutText.value;
        const pointOne = event.target.pointOne.value;
        const pointTwo = event.target.pointTwo.value;
        const pointThree = event.target.pointThree.value;
        const pointFour = event.target.pointFour.value;
        const pointFive = event.target.pointFive.value;



        const aboutSection = {

            aboutImgOne,
            aboutHeading,
            aboutDetails,
            aboutText,
            pointOne,
            pointTwo,
            pointThree,
            pointFour,
            pointFive,


        };

        const url = `http://localhost:5000/update-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area  vh-100" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row justify-content-center">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update About </h2>



                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgOne" defaultValue={about.aboutImgOne} placeholder=" Image One" required />
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutDetails" defaultValue={about.aboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>
                                  
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointOne" defaultValue={about.pointOne} placeholder="Point One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointTwo" defaultValue={about.pointTwo} placeholder="Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointThree" defaultValue={about.pointThree} placeholder="Point Three" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointFour" defaultValue={about.pointFour} placeholder="Point Four" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="pointFive" defaultValue={about.pointFive} placeholder="Ponit Five" required />
                                        </div>
                                    </div>

                                    <div class="slider-btn">
                                        <button class="default-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
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

export default UpdateAboutSection;