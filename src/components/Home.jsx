import React from "react"
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

const Home = ()=>{

    const navigate = useNavigate()


    return (
        <div className="home">  
        <h1>Home page</h1>
        <Button variant="contained">Home</Button>
         <button onClick={()=> navigate("/medicine")}>medicine</button>
        <button>Health</button>
        <button>SOS</button>
        {/* <button>Login</button> */}
        </div>
    )
}


export default Home;