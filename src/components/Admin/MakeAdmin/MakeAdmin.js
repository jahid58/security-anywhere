import React from 'react';
import { useForm } from 'react-hook-form';
import AdminPanel from '../AdminPanel/AdminPanel';


const MakeAdmin = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        const adminData ={
            name:data.name,
            email: data.email,
        }
      
         fetch('https://fierce-garden-72152.herokuapp.com/addAdmin',
       {
           method:'POST',
               headers:{
                   'content-type':'application/json'
               },
               body:JSON.stringify(adminData)
       })
       .then(res=>console.log(res))
       reset({})
     };
    return (
     <div className='row'>
         <div className="col-md-3">
             <AdminPanel></AdminPanel>
         </div>
         <div className="col-md-9 add_admin">
      <form onSubmit={handleSubmit(onSubmit)} >
      <br/><br/>
      <input placeholder='Name' className='form-control input' type='text' {...register('name', { required: true })} /> <br/><br/>
      
      <input  type='email' className='form-control input'  placeholder='email' {...register('email', { required: true })}/><br></br>
   
      <input type="submit" value=' make admin' className='btn btn-success'/>
      
    </form>
    </div>
     </div>
    );
};

export default MakeAdmin;