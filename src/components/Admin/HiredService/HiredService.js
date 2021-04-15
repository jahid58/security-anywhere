import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';

const HiredService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const  [hiredService,setHiredService] = useState([])
    useEffect(()=>{
        console.log(loggedInUser)
        fetch('http://localhost:5000/hiredServices'+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='row'>
            <div className="col-md-3"><AdminPanel></AdminPanel></div>
            <div className="col-md-9">this is hiring List</div>
        </div>
    );
};

export default HiredService;