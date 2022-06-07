import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

  const {id} = useParams()

  useEffect(() => {
    console.log(id)
    fetch(`http://localhost:1337/posts/${id}`)
      .then(res => res.json())
      .then(res => console.log(res))
  })
 
    return (
      <div>Single post</div>


    )
  
}
