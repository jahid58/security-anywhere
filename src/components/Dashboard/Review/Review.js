import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div className='row'>
            <div className="col-md-3"><Sidebar></Sidebar></div>
            <div className="col-md-9">
                 <h1>this is review</h1>
            </div>
           
        </div>
    );
};

export default Review;