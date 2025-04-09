/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import TextSection from "./HomeTextSection";
import AboutTextSection from "./AboutText-section";
import EnquiryForm from "./HomeEnquirySection";
import Testimonials from "./HomeTestimonials";
import PlanCards from "./HomePlanCards";
import FAQ from "./FaQs";
import CustomCarousel from "./HomeCarousel";

function HomePage() {
  return (
    <>
      <div className="background-container">
        <img src={'https://www.teethtalkgirl.com/static/6d4c97ad123c7984d7190df486bcc278/9cfba/Adobe_Stock_430458625_6b0bbcc6b9.webp'} alt="Background" className="background-img" />

        {/* Overlay Content for Text & Button */}
        <div className="overlay-content">
          <strong className="hero-text">
            We provide the best solutions for dental appointments.
          </strong>

          {/* Contact Us Button */}
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </div>

      {/* Our services section */}
      <TextSection />
      {/* About us section  */}
      <AboutTextSection />
      {/* Enquiry form section  */}
      <EnquiryForm />
      {/* Testimonials section with cards  */}
      <Testimonials />
      {/* Plan cards  */}
      <PlanCards />
      {/* FAQ */}
      <FAQ/>
      {/* CustomCarousel  */}
      <CustomCarousel/>
    </>
  );
}

export default HomePage;
