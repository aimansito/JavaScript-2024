import imagen0 from './img/reyes/rey_atanagildo.png';
import imagen1 from './img/reyes/rey_sisebuto.png';
import {useRef} from 'react';
import './App.css';


import './App.css';

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  function incrementar(e){
      e.target.innerHTML=Number(e.target.innerHTML)+1;
     // e.target.style.backgroundColor="red";
     if(e.target.innerHTML>=10){
       e.target.innerHTML=1;
     }
     if(e.target.innerHTML>=8){
         e.target.style.backgroundColor="red";
     }else{
        e.target.style.backgroundColor="white"
     }
  }
  const convertir=()=>{
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;
  }
  const cambiar=(j)=>{
    if(j.target.src.includes("atanagildo")){
      j.target.src=imagen1;
    }else{
      j.target.src=imagen0;
    }
  }
  function lectura(e){
    refCaja.current.innerHTML=e.target.value;
  }
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div><img onClick={cambiar} src={imagen0} alt="messi"/></div>
      <input className="campo"/>
    </>
  );
}
export default App;
