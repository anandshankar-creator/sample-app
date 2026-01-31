import React from 'react'


const Mapssss = () => {
  return (
    <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ul>
    
  )
}

export default Mapssss