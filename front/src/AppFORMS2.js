import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserApp2 from "./Pages/UserApp2";
import CreateUser2 from "./Pages/CreateUser2";
import EditUser2 from "./Pages/EditUser2";


function AppFORMS2(){
    return(
        <div>
<BrowserRouter>
<Routes>
    <Route path="/" element={<UserApp2/>}/>
    <Route path="/create" element={<CreateUser2/>}/>
    <Route path="/edit/:id" element={<EditUser2/>}/>
</Routes>
</BrowserRouter>
</div>

    );
}
export default AppFORMS2;

