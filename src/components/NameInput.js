import React from 'react'

const NameInput = ({ setName }) => (
  <>
    <h3>Name:</h3>
    <input onChange={e => setName(e.target.value)} />
  </>
)

export default NameInput
