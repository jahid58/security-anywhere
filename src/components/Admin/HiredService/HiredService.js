import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';


const HiredService = () => {
   const [loggedInUser,setLoggedInUser]  = useContext(UserContext);
    const  [hiredService,setHiredService] = useState([])

    useEffect(()=>{
        fetch('https://fierce-garden-72152.herokuapp.com/hiredServices', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setHiredService(data))
    },[])
    const [hiredId, setHiredId] = useState('')

    const handleStatus = (e) =>{
       if(hiredId){
        const newStatus ={status:e.target.value}
            fetch('https://fierce-garden-72152.herokuapp.com/updateStatus/'+hiredId,
            {
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newStatus)
        })
         }
       
       }
    

    return (
        <div className='row'>
            <div className="col-md-3"><AdminPanel></AdminPanel></div>
            <div className="col-md-9">
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Service name</th>
                <th className="text-secondary" scope="col">Client name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Status</th>
             
                </tr>
            </thead>
            <tbody>
                {hiredService.length &&
                  hiredService.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.service}</td>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td><select onMouseOut ={(e)=>{
                            setHiredId(service.id)
                            handleStatus(e)
                        }} className='btn btn-success'>
                            <option value="Done" > Done</option>
                            <option value='Pending'  >Pending</option>
                            <option value="On going" > On going</option>
                            </select></td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
    );
};

export default HiredService;