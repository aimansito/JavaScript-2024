import { useState } from 'react';

export const PrimerComponente = () => {
 // let nombre = "Aiman";
    let web = "aiman.es";

    let cursos =[
        "Master en JS", "Master en PHP","Master en PHP","Master en React"
    ]

    const[nombre, setNombre] = useState("Victor");

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }
  return (
    <div>
      <h2>Hola PrimerComponente</h2>
      <p>Mi nombre es:<strong className={nombre.length >=4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
      <p>Mi web es: {web}</p>


      <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el nombre'></input>
      
      <button onClick={() => cambiarNombre("COMPONENTE")}>Cambiar nombre</button>
      <button onClick={e =>{
        console.log("El valor guardado en tu estado es:", nombre);
      }}>Mostrar valor de estado </button>

      <h2>Cursos</h2>
      <ul>
        {
           cursos.map((curso, indice) => (
            <li key={indice}>{curso}</li>
        ))
        }
      </ul>
    </div>
  )
}

