import React, { useState } from 'react'
import RecursivelyRenderedComment from './RecursivelyRenderedComment'

const CommentSection = ({
  commenterName, setName, post, setPost, comments, setComments,
}) => {
  const [depth, setDepth] = useState(0)
  return (
    <>
      {comments.length >= 1 ? <h3 id="commentBar">Comment Section:</h3> : null}
      {comments.map(element => {
        return <RecursivelyRenderedComment class="comment" commenterName={element.commenterName} post={element.post} depth={depth} setDepth={setDepth} />
      })}
    </>
  )
}

export default CommentSection
