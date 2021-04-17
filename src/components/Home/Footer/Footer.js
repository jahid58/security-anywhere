import React from "react";
import "./Footer.css";

import FooterCol from "./FooterCol";

const Footer = () => {
  const EmergencyServices = [
    { name: "Emergency security ", link: "/emergency" },
    { name: "Event security", link: "/Event" },
    { name: "It security", link: "/It security" },
    { name: "special security", link: "/tooth-extract" },
  ];
  const address = [
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
    { name: "lorem ipsum lesra iae taz", link: "//google.com/map" },
  ];
  const services = [
    { name: "Home security", link: "/emergency" },
    { name: "it security", link: "/hire" },
    { name: "Office security", link: "/office security" },
    { name: "event security", link: "/event security" },
    { name: "bodyguard", link: "/hire" },
    { name: "computer security", link: "/hire" },
    { name: "biometric security", link: "/hire" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5 text-center">
          <FooterCol
            key={1}
            menuTitle={"Emergency  services"}
            menuItems={EmergencyServices}
          />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={4} menuTitle="Branches" menuItems={address}>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-brand">+234897435</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
