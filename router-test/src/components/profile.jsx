import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const nav = useNavigate();
  return(
    <>
  <h1 className="profile"> profile</h1>
  <button onClick={()=>{
    nav('/')
  }}>go to home</button>
  </>
  )
    
  };

export default Profile;