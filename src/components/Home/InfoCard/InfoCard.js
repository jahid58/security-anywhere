import React from 'react';

const InfoCard = ({info}) => {
    return (
       <div className="col-md-4 col-sm-6 my-5">

           <div className="p-3 text-center">
              
           <img src={info.img} className='img-fluid' style={{height:'250px'}} alt=""/>
            <h3 className="text-success py-3">{info.name}</h3>
            <p>{info.description}</p>
            <button className="btn btn-light text-warning">Read more</button>
           </div>

       </div>
    );
};

export default InfoCard;