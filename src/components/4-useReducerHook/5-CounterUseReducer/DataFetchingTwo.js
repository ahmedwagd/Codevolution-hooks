import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {}
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    }
    case 'FETCH_FAIL': {
      return {
        loading: false,
        error: 'Something Went Wrong',
        post: {}
      }
    }
    default: {
      return state;
    }
  }
}
function DataFetchingTwo() {
  const [{ loading, error, post }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_FAIL' })

      })
  }, [])
  return (
    <div>
      {
        loading ? <div>Loading ...</div> : <h2>{post.title}</h2>
      }
      {
        error ? <div>{error}</div> : null
      }
    </div>
  )
}

export default DataFetchingTwo