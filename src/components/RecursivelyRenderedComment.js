import React, { useState } from 'react'
import ReplyButton from './ReplyButton'
import Counter from './Counter'
import ReplyBox from './ReplyBox'

const RecursivelyRenderedComment = ({
  commenterName, post, depth, setDepth,
}) => {
  const [counter, setCounter] = useState(0)

  const [clickedReply, setClickedReply] = useState([])
  const [clickedSubmit, setClickedSubmit] = useState('false')

  const [replierName, setReplierName] = useState('')
  const [replyPost, setReplyPost] = useState('')
  const [replies, setReplies] = useState([])

  if (depth === 3) {
    // Base case
    return null
  }

  return (
    <>
      <div className="comment">
        <h4>
          {commenterName}
          :
        </h4>
        <p>{post}</p>

        <Counter counter={counter} setCounter={setCounter} />
        <ReplyButton clickedReply={clickedReply} setClickedReply={setClickedReply} />

        {clickedReply === 'true' && clickedSubmit === 'false' ? (
          <ReplyBox
            replierName={replierName}
            setReplierName={setReplierName}
            replyPost={replyPost}
            setReplyPost={setReplyPost}
            replies={replies}
            setReplies={setReplies}
            clickedSubmit={clickedSubmit}
            setClickedSubmit={setClickedSubmit}
          />
        ) : null}

        {replies.map(element => (
          <RecursivelyRenderedComment
            commenterName={element.replierName}
            post={element.replyPost}
            clickedReply={clickedReply}
            setClickedReply={setClickedReply}
            depth={depth + 1}
            setDepth={setDepth}
          />
        ))}
      </div>
    </>
  )
}

export default RecursivelyRenderedComment
