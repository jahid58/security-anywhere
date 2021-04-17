import React, { useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);
       
        fetch('https://fierce-garden-72152.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()
            
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-3"><AdminPanel></AdminPanel></div>
        <div className="col-md-9 p-4 pr-5" style={{  backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a service</h5>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Service details" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hiring Price</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddService;