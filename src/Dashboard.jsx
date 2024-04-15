import React from "react";
import { useNavigate } from "react-router-dom";


function Dashboard(){

    const navigate= useNavigate()

    const handelSubmit =()=>{
       navigate("/dashboard")
    }
    return(
        <div>
    <h1>pr component</h1>
    <button onClick={handelSubmit}> le gautam lele</button>

</div>
    )
}

export default Dashboard;