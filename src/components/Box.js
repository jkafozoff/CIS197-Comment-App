import React from 'react'
import NameInput from './NameInput'
import PostInput from './PostInput'

const Box = ({
  commenterName, setName, post, setPost, comments, setComments,
}) => {
  function submitComment(e) {
    if (commenterName !== '' && post !== '') {
      setComments([...comments, { commenterName, post }])
    }
  }
  return (
    <div>
      <NameInput setName={setName} />
      <PostInput setPost={setPost} />
      <div> </div>
      <button type="submit" onClick={e => submitComment(e)}>Submit</button>
    </div>
  )
}

export default Box
