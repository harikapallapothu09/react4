import { useState } from "react";


function App(){

  const[light, setLight] = useState(false);
  const handleMode = () =>{
    setLight(!light);
  }

  return (
    <>
    <div>
      <button style={{backgroundColor: light ? 'white' :'black', color : light ? 'black' :'white'}}
      onClick={handleMode}>{light ? 'Switch to dark Mode' : 'Switch to light Mode'}</button>
    </div>
    </>
  )
}

export default App;


import { useState } from "react";


function App(){

  const[light, setLight] = useState(true);

  const handleMode = ()=>{
    setLight(!light);
  }

  return(
    <>
    <div style={{backgroundColor: light? 'white' : 'black', color: light? 'black' : 'white', width: '400px' , height: '400px'}}>
      Change the color
    <button onClick={handleMode}>{light ? 'Switch to Dark Mode' : "Switch to Light Mode"}</button>
    </div>
    </>
  )
}

export default App;