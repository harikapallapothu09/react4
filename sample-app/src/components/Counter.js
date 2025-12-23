

function Counter({count , increment}){

    return(
        <>
        <div>
            <h2>Counter from Child component: {count}</h2>
            <button onClick={increment}>Counter</button>
        </div>
        </>
    )
}

export default Counter;


// import { useState } from "react";


// function App() {
//   //counter example

//   const[count, setCount] = useState(0);

//   const increment = ()=>{
//     setCount(count+1)
//   }
//   return (
//     <>
//     <h2>Counter: {count}</h2>
//     <button onClick={increment}>Counter</button>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import Counter from './components/Counter'
function App(){

  const[count, setCount] = useState(0);

  const increment = ()=>{
    setCount(count+1)
  }
  return(
    <>
    <Counter count = {count} increment = {increment}/>
    </>
  )
}

export default App;