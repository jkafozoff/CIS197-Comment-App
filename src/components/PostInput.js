import React from 'react'

const PostInput = ({ setPost }) => (
  <>
    <h3>Post:</h3>
    <input onChange={e => setPost(e.target.value)} />
  </>
)

export default PostInput
