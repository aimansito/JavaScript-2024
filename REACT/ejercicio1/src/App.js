 import imagen from './img/reyes/rey_sisebuto.png';
import imagen1 from './img/reyes/rey_leogivildo.png';
import imagen2 from './img/reyes/rey_atanagildo.png';
import imagen3 from './img/reyes/rey_incognito.png';
import './App.css';

function App() {
  let nombres = ["Atanagildo","Leogivildo","Sisebuto"];
  const cambiarTexto=(e)=>{
    if(e.target.innerHTML=="VISTO"){
      e.target.innerHTML="";
    }else{
      e.target.innerHTML="VISTO";
    }
  }
  const cambiarImg=(e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.visibility="hidden";
    }else{
      e.target.src=imagen3;
    }
    e.target.parentNode.style.backgroundColor="white";
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='imagenes'>
         <div className="caja">
            <img onClick={cambiarImg} src={imagen} alt="sisebuto"/>  
            <div onClick={cambiarTexto} className="nombre">{nombres[0]}</div>
         </div>
         <div className="caja">
            <img onClick={cambiarImg} src={imagen1} alt="sisebuto"/>  
            <div onClick={cambiarTexto} className="nombre">{nombres[1]}</div>
         </div>
         <div className="caja">
            <img onClick={cambiarImg} src={imagen2} alt="sisebuto"/>  
            <div onClick={cambiarTexto} className="nombre">{nombres[2]}</div>
         </div>
        </div>
      </header>
    </div>
  );
}
export default App;
