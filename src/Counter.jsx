import React from 'react'

import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  let name = "counter";

  const handledisplay = () => {
    alert(count);
    console.log(name);
  }
  
  
  
    return (
        <div>
    <h2>{name}</h2>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={handledisplay}>Display</button>
    <button onClick={() => name = "upGrad"}>update</button>
     </div>   
  )
}
export default Counter