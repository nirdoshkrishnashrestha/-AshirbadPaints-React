import React from 'react'
import {useParams} from 'react-router-dom';

function Profile() {
    let {user} = useParams();
  return (
    <div className='container text-center my-3'>

     <h1> Welcome: {user}</h1>  
    <h3> I am from Profile Page.</h3>
    
    </div>
  )
}

export default Profile