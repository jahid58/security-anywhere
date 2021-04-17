import React, { useEffect } from 'react';

const HiredCard = ({hired,status}) => {
  
    const {service,id,image} = hired
    return (
        <div className='col-md-4 text-secondary'>
                 <div className="m-1 p-2  bg-light rounded shadow text-center">
                 <h5 className="text-primary">{service}</h5>
                 <p className='p-1'>Status : Done</p>
               <p className="">Payment id: {id}</p>
              
                 </div>
        </div>
    );
};

export default HiredCard;