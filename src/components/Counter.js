import React from 'react'

const Counter = ({ counter, setCounter }) => {
  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      <button type="button" className="counter" onClick={() => increment()}>↑</button>
      {counter}
      <button type="button" className="counter" onClick={() => decrement()}>↓</button>
    </>
  )
}

export default Counter
