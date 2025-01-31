import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Botonera(props) {

  let tablero = [];

  for (let i = 0; i < props.matriz.length; i++) {
    for(let j = 0; j < props.matriz[i].length; j++){

      if(i % 2 === 0){
        tablero.push(<Button outline />);
        tablero.push(<Button color={props.matriz[i][j]} />);
      }else{
        tablero.push(<Button color={props.matriz[i][j]} />);
        tablero.push(<Button outline />);
      }
    }
    tablero.push(<br/>);
  }

  return(tablero);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      listaBotones: [],
    };
  }

  componentWillMount() {
    let arr = this.state.listaBotones;
    for(let i = 0; i < 5; i++){
      
      arr[i] = Array(4).fill("secondary");
    }

    for(let i = 5; i < 8; i++){

      arr[i] = Array(4).fill("success");
    }


    this.setState({listaBotones: arr});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Button onClick={()=>this.jugar()}>Jugar</Button>
        <br />
        {this.state.listaBotones}
        <Botonera matriz = {this.state.listaBotones} />
        </header>
      </div>
    );
  }
}
export default App;