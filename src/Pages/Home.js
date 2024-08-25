import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/HomePage/ServicesSection";
import VideoSection from "../components/HomePage/VideoSection";
import AboutSection from "../components/HomePage/AboutSection";
import CounterSection from "../components/HomePage/CounterSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection";
import ContactUs from "./ContactUs";









const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <PricingSection></PricingSection>
      <CounterSection></CounterSection>
      <TestimonialSection></TestimonialSection>
      <ContactUs></ContactUs>







    </div>
  );
};

export default Home;
