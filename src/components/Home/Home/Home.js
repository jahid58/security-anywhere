import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactForm from '../ContactUs/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';


import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;