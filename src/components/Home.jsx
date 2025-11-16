import React from "react"
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

const Home = ()=>{

    const navigate = useNavigate()


    return (
        <div className="home">  
        <h1>Home page</h1>
        {/* <Button variant="contained">Home</Button> */}
         <button onClick={()=> navigate("/medicine")}>Add Medicine</button>
        <button onClick={()=> navigate("/hydrate")}>Health</button>
        <button onClick={()=> navigate("/sos")}>SOS</button>
        {/* <button>Login</button> */}
        </div>
    )
}


export default Home;