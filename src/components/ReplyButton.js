import React from 'react'

const ReplyButton = ({ clickedReply, setClickedReply }) => {
  function replyToComment(e) {
    setClickedReply('true')
  }

  return (
    <>
      <button
        type="button"
        onClick={e => {
          replyToComment(e)
        }}
        style={{ width: '75px', height: '40px', border: '1px solid red' }}
      >
        Reply
      </button>
    </>
  )
}

export default ReplyButton
