import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const history = useHistory()
    const {name,description,image,price,_id} = service
    return (
        <div className="col-md-4 " onClick={()=>{history.push(`/hire/${_id}`)}}>
            
             <div className=" service text-center rounded shadow">
             <img style={{width:'100px' ,height:'70px'}} src={`data:image/png;base64,${image.img}`} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
               <p className="">{description}</p>
            <h5 className='text_bluer'>Hiring price per month ${price} </h5>
            <h6>Click for hire</h6>
             </div>
        
        </div>
    );
};

export default ServiceCard;