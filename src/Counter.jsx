
import React, {useState} from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  // updater function (multiple state updtes)
  const increment = () => {
    // FCFS
    setCount(c => c + 1)
    setCount(c => c + 1)
    setCount(c => c + 1)

  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () =>{
    setCount(0)
  }
  return(
    <>
      <div className='counter-container'>
        <p className="count-display">{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>

      </div>
    </>
  )
}