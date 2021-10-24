import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./Email";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [buttonText, setButtonText] = useState("Send Message");
  const onSubmit = (data, e) => {
    console.log(data);
    setButtonText("...sending");
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then((res) => {
      setButtonText("sent");
      reset();
    });
  };
  return (
    <div className="contact_form">
      <div className="contact_area row">
        <div className="col-md-6">
          <form
            action=""
            className="p-5 text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-white p-3">Always connect with us</h3>
            <input
              type="text"
              className="email form-control m-1"
              placeholder="email"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              className="subject form-control m-1"
              placeholder="subject"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              className="massage form-control m-1"
              placeholder="massage"
              {...register("name", { required: true })}
            />
            <input
              className="btn bg-primary my-3"
              type="submit"
              value={buttonText}
            ></input>
          </form>
        </div>
        <div className="col-md-6 text-center ">
          <div className="mt-5">
            <h4 className="p-3 text-white">Address</h4>
            <p className="text-white"> Badda, Dhaka-1212 Bangladesh</p>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
