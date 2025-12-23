import { useState } from "react";


function App(){

  const[para, setpara] = useState(false);

  const handlepara = ()=>{
    setpara(!para)
  }

  return(
    <>
    <h2 style={{display: para? 'block' : 'none'}}>This is a para</h2>
    <button onClick={handlepara}>{para ? 'Hide Data' : 'Show Data'}</button>
    </>
  )
}

export default App;