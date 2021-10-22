import React from 'react'

import NameInput from './NameInput'
import PostInput from './PostInput'

const ReplyBox = ({
  replierName, setReplierName, replyPost, setReplyPost, replies, setReplies, clickedSubmit, setClickedSubmit,
}) => {
  function submitReply(e) {
    setReplies([...replies, { replierName, replyPost }])
    setClickedSubmit('true')
  }
  return (
    <div>
      <NameInput setName={setReplierName} />
      <PostInput setPost={setReplyPost} />
      <div />
      <button type="submit" onClick={e => submitReply(e)}>Submit Your Reply</button>
    </div>
  )
}

export default ReplyBox
