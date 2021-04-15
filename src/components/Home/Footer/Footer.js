import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const EmergencyServices = [
        {name: "Emergency security " , link: "/emergency"},
        {name: "Event security" , link: "/Event"},
        {name: "It security" , link: "/It security"},
        {name: "special security" , link: "/tooth-extract"},
    ]
    const address = [
        {name: "Dhaka - 1212 Badda" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Home security" , link: "/emergency"},
        {name: "it security" , link: "/hire"},
        {name: "Office security" , link: "/office security"},
        {name: "event security" , link: "/event security"},
        {name: "bodyguard" , link: "/hire"},
        {name: "computer security" , link: "/hire"},
        {name: "biometric security" , link: "/hire"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Emergency  services"} menuItems={EmergencyServices}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Address" menuItems={address}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+234897435</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;