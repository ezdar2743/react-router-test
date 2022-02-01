import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) =>  {
    const nav = useNavigate();
    return(
        <>  
    <h1>Home</h1>
    <button onClick={()=>{
        nav('/profile')
    }}>go to profile</button>
    </>
    )

}

export default Home;