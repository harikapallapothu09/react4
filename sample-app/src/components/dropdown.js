import { useState } from "react";


function App(){

  const products = ['Shoes', 'shirt', 'tv','mobiles' , 'toys' , 'laptop', 'mango', 'apple'];
  const[query, setquery] = useState('');
  return(

    <>
    <div>
      <input type="text" placeholder="Search the product"
      value={query} onChange={(e)=>setquery(e.target.value)}/>

      {products
      .filter((item)=>{
        return  item.toLowerCase().includes(query.toLowerCase())
      })
      .map((product, index)=>{
       return (
        <ul>
          <li key={index}>{product}</li>
        </ul>
       )
      })
      }
    </div>
    </>
  )
}

export default App;