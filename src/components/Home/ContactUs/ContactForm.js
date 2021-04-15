import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact_form'>
          <div className="contact_area row">
        <div className="col-md-6">
     
           <form action="" className='p-5 text-center'>
           <h3 className='text-white p-3'>Always connect with us</h3>
             <input type="text" className="email form-control m-1" placeholder='email'/>
             <input type="text" className="subject form-control m-1" placeholder='subject'/>
             <input type="text" className="massage form-control m-1" placeholder='massage'/>
             <button className="btn bg-primary my-3">Submit</button>
           </form>
        </div>
        <div className="col-md-6 text_orange text-center ">
      <div className="mt-5">
      <h4 className='p-5'>Our Ethics</h4>
        <p> We call police at risky operations</p>
        <p>Our best security system </p>
        <p> We highly care for our client opinion</p>
      </div>

        </div>
          </div>
        </div>
    );
};

export default ContactForm;