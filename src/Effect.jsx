import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount] = useState(0)
  const fetchData = () =>{
    console.log("Clean-up")
  }
  useEffect(() => {
    console.log("Mounting")
    const timerId = setInterval(fetchData, 1000);
    return() =>{
      clearInterval(timerId)
      console.log("un-Mount")
    }
  }, [])
  

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count+1)}>Click</button>
    </div>
  )
}

export default Effect
