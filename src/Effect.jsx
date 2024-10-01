import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {}, [])

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count+1)}>Click</button>
    </div>
  )
}

export default Effect
