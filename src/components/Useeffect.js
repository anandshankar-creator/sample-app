import React from 'react'
import {useState,useEffect} from 'react'

const Useeffect = () => {
  const[posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(posts=>setPosts(posts))
  },[])
  return (
    <div>
      <h1>Fetch API</h1>
      {posts.map((post)=>(
        <div>
          <h1>{post.email}</h1>
          <p>{post.body}</p>
          </div>
      ))}
    </div>
  )
}

export default Useeffect
