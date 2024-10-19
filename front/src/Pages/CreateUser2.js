import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";


function CreateUser2(){
    const navigate =useNavigate();
const [UserInput,setUserInput]=useState({
    name:"",
    age:"",
    mobile:"",
    email:"",
    password:"",

});

const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...UserInput, [name]: value });
};
const handleSubmit=async(e)=>{
    e.preventDefault();

    const {name, age, mobile, email, password}=UserInput;
  const values = await axios.post("http://localhost:8006/create", {name, age, mobile, email, password});
 
  if(values){
    alert("updated");
    navigate("/");
};


}
    return(
        <div> 
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">name</label>
    <input 
     type="text"
     name="name"
     value={UserInput.name}
     onChange={handleChange}
     class="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     >
    </input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">age</label>
    <input 
    type="number" 
    name="age"
    value={UserInput.age}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp">
    </input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">mobile</label>
    <input 
    type="number" 
    name="mobile"
    value={UserInput.mobile}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp">
    </input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input 
    type="email" 
    name="email"
    value={UserInput.email}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp">
    </input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input 
    type="password" 
    name="password"
    value={UserInput.password}
    onChange={handleChange}
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp">
    </input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    );
}

export default CreateUser2;