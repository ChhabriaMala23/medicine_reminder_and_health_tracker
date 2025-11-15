import React from "react"
import {useNavigate} from 'react-router-dom'

const Home = ()=>{

    const navigate = useNavigate()


    return (
        <>  
        <h1>Home page</h1>
        <button onClick={()=> navigate("/medicine")}>medicine</button>
        <button>Home</button>
        <button>Health</button>
        <button>SOS</button>
        {/* <button>Login</button> */}
        </>
    )
}


export default Home;