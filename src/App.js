import React, { useState } from 'react'
import Box from './components/Box'
import CommentSection from './components/CommentSection'
import './styles/test.css'

const App = () => {
  const [commenterName, setName] = useState('')
  const [post, setPost] = useState('')
  const [comments, setComments] = useState([])

  return (
    <>
      <h1>CIS 197 Community</h1>
      <h2>Post a comment here: </h2>

      <Box commenterName={commenterName} setName={setName} post={post} setPost={setPost} comments={comments} setComments={setComments}/>
      <CommentSection commenterName={commenterName} setName={setName} post={post} setPost={setPost} comments={comments} setComments={setComments} />
    </>
  )
}

export default App
