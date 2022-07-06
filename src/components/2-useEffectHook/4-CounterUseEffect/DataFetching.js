import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handlClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data)
      }).catch(error => console.log(error))
  }, [idFromButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handlClick}>Fetching Post</button>
      <div>
        {
          post.title
        }
      </div>
      {/*
      <ul>
        {
          post.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
  */}
    </div>
  )
}

export default DataFetching