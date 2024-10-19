import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";

function EditUser2(){
    const { id } = useParams();
    const navigate=useNavigate();
    const [UserIntput,setUserIntput]=useState({
        name:"",
        age:"",
        mobile:"",
        email:"",
        password:"",
    });

    useEffect(()=>{
        const functionName= async()=>{
            const dataa = await axios.get(`http://localhost:8006/user/${id}`);
             
                setUserIntput(dataa.data.message);
            };

            functionName(); 
    },[]);

 

const handleChange=({target:{value,name}})=>{
    setUserIntput({...UserIntput, [name]:value});
};

const handleEdit=async (e)=>{
    e.preventDefault();

    const {name,age,mobile,email,password}= UserIntput;
   const Boo = await axios.put(`http://localhost:8006/edit/${id}`,
    {
        name,age,mobile,email,password,
    }
   );

if (Boo){
    alert("EditSuccess");
    navigate("/");
}
};

    return(
        <form onSubmit={handleEdit}>
            <h2>Editing Page</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">name</label>
    <input type="name" 
    name="name"
    value={UserIntput.name}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">age</label>
    <input type="number" 
    name="age"
    value={UserIntput.age}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">mobile</label>
    <input type="number" 
    name="mobile"
    value={UserIntput.mobile}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input type="email" 
    name="email"
    value={UserIntput.email}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
}

export default EditUser2;