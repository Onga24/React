
import {React , useState} from 'react'

function Counter() {

// using the state to update the value of string 

const [str, setStr] = useState("Click Me");
 const [count, setCount  ] = useState(0); 

 function increment() {
    setCount(count=>count + 1);
  }
  function decrement() {  
     setCount(count=>count - 1);
  
  }
  function reset() {
    setCount(0);
  }
    

    
    return (
    <>
     <button onClick={() => {
        // 3. Call the setStr function with the new value
        setStr("Hello ");
      }}>
        <span> String: {str}</span>
      </button>
      <br />
      <br />
    <div>Counter</div> 
    <br />

    <h2>counter:{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
    
  )
}

export default Counter