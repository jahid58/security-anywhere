import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css'

const Testimonials = () => {
    const [testimonialData,setTestimonialData] =useState([])
    useEffect(()=>{
     fetch('https://fierce-garden-72152.herokuapp.com/getReviews')
     .then(res=>res.json())
     .then(data=>setTestimonialData(data))
    },[])
    return (
        <section className="testimonials py-5">
        
           <div className='review'>
           <div className="section-header text-center">
                <h2 >What Our Client <br/> Says </h2>
            </div>
            <div className="card-deck mt-3">
            
               { testimonialData.length  &&
                     testimonialData.map(review => <Testimonial review={review} key={review._id}/>)
                 }
               
           </div>
        </div>
    </section>
    );
};

export default Testimonials;