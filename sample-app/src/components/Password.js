import { useState } from "react";


function App(){

  const[password, setpassword] = useState('');

  const[showPassword, setShowPassword] = useState(false);

  const passwordHandle = (e)=>{
    setpassword(e.target.value)
  }
  return(
    <>
    <div>
      <input type={showPassword ? "text" : "password"}
      placeholder="Enter the password"
      value={password}
      onChange={passwordHandle}/>
    </div>
    <button onClick={()=> setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</button>
    </>
  )
}

export default App;
