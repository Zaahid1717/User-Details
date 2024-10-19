import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function UserApp2(){
    const [Userlist, setUserlist]=useState([]);
    useEffect(()=>{functionName();},[]);

const functionName= async()=>{
const dataa = await axios.get("http://localhost:8006/users");
 
console.log(dataa);

    setUserlist(dataa.data.message);
};

const handleDelete=async(id)=>{
    const fun= await axios.delete(`http://localhost:8006/delete/${id}`);
    if (fun){
        functionName();
        alert("userdeleted")
    }

};

 return(
    <>
    <Link to={"/create"} className="btn btn-primary">CREATE USER</Link>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">mobile</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {Userlist.map((item,index)=>{
        return(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>
              <Link
                    to={`/edit/${item._id}`}
                    className="btn btn-success btn-sm"
                  >
                    Edit
                  </Link>

                  <button 
                    onClick={()=>{handleDelete(item._id);}}>
                    Delete
                  </button>
              </td>
            </tr>
        )
    })
}
  </tbody>
</table>
</>
 )

}

export default UserApp2;
