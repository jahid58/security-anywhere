import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const history = useHistory()
    const {name,description,image,price,_id} = service
    return (
        <div className="col-md-4" onClick={()=>{history.push(`/hire/${_id}`)}}>
            
             <div className=" service text-center rounded shadow">
             <div className="animation">
             <img  src={`data:image/png;base64,${image.img}`} className='image' alt="" />
             <div class="middle">
           <div class="text">Click for Hire</div>
             </div>
             </div>
               <div className="m-2">
               <h5 className="mt-3 mb-3">{name}</h5>
               <p className="">{description}</p>
            <h5 className='text_bluer p-2'> Per month: ${price} </h5>
               </div>
             </div>
        
        </div>
    );
};

export default ServiceCard;