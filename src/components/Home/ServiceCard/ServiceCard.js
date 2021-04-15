import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const history = useHistory()
    const {name,description,image,price,_id} = service
    return (
        <div className="col-md-4 text-center"style={{cursor:'pointer'}} onClick={()=>{history.push(`/${_id}`)}}>
            
           <div className="m-1 p-3 bg_darker rounded shadow">
                <img style={{height: '50px'}} src={`data:image/png;base64,${image.img}`} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
               <p className="text-secondary">{description}</p>
            <p className='text_bluer'>Hiring price per month {price} Dollar</p>
        </div>
        </div>
    );
};

export default ServiceCard;