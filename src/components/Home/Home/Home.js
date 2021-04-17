import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactForm from "../ContactUs/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

import "./Home.css";

const Home = () => {
  return (
    <div className="headers">
      <Header></Header>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
