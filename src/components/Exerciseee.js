import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const Exerciseee = () => {
    const[text,setText]=useState()
    const homeText = () => {
        setText('Home')        
    }
    const galleryText = () =>{
        setText('Gallery')
    }
    const contactText = () => {
        setText('Contact')
    }

  return (
    <div>
        <h1>Welcome to {text}</h1>
        <Button onClick={homeText}>Home</Button>
        <Button onClick={galleryText}>Gallery</Button>
        <Button onClick={contactText}>Contact</Button>

    </div>
  )
}

export default Exerciseee