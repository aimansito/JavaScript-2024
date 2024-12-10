import React,{useState} from 'react'
const  App = () => {
  const [contador,setContador] = useState(0);
  return (
   <div>
    <h1>{contador}</h1>
    <button onClick={()=>setContador((e)=>e-1)}>Disminuir</button>
    <button onClick={()=>setContador((e)=>e+1)}>Aumentar</button>
    <button onClick={()=>setContador((e)=>e=0)}>Restablecer</button>
   </div>
  );
}
export default App;
