import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabla:[{},{nombre:"COCKED PISTOL",medida:"Guerra nuclear inminente", color:"secondary"},
        {nombre:"FAST PACE",medida:"Paso previo a la guerra nuclear", color: "danger"},
        {nombre:"ROUND HOUSE",medida:"Incremento en la preparación y movilización de las tropas", color:"warning"},
        {nombre:"DOUBLE TAKE",medida:"Incremento de la vigilancia por inteligencia y extremar las medidas de seguridad",color:"success"},
        {nombre:"FADE OUT",medida: "Estado más bajo",color:"primary"}
      ]
    };
  }
  render(){
    return(
      <div className='App'>
        <Defcon/>
        <h1>DEFCON</h1>
        <Button>Conflicto fronterizo(suma 50)</Button>
        <Button>Lanzamiento cohete(suma 200)</Button>
        <Button>Retórica belicista(suma 25)</Button>
      </div>
    )
  }
}
function Defcon(props) {
  return(
    <>
      <Button color="primary">Nada de momento</Button>
    </>
  )
}

export default App;