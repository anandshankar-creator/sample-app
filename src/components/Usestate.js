import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Usestate = () => {
  const[count,setColour]=useState('white');
  const changeColour = () =>{
    setColour('blue');
  }

  return (
    <div>
      <h1>my favourite colour is{colour}</h1>
      <Button onClick={changeColour}>click</Button>
    </div>
  )
}

export default Usestate