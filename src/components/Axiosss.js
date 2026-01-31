import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Axiosss = () => {
     const[users,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setUser(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
  return (
    <div>
         <h2>User Details</h2>
         {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Axiosss