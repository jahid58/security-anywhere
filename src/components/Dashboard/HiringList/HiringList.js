import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import HiredCard from './HiredCard';


const HiringList = () => {
    const {user,status} = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = user;
     const [serviceStatus,setServiceStatus] = status
    const  [hiredService,setHiredService] = useState([])
    const history = useHistory()
    useEffect(()=>{
        fetch('https://fierce-garden-72152.herokuapp.com/hiredServices', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setHiredService(data))
    },[history])
    return (
        <div className='row'>
            <div className="col-md-3"><Sidebar></Sidebar></div>
            <div className="col-md-9 bg-secondary">
            
       <div className="row m-4 ">
           
        {
            hiredService.length && hiredService.map(service=><HiredCard hired={service} status={serviceStatus}></HiredCard>)
        }
       </div>

            </div>
        </div>
    );
};

export default HiringList;