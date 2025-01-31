import React, { Component, useState } from "react";
import { Row, FormGroup, Button, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cliente(props) {
  const [nombre,setNombre] = useState("");
  const handleChange = (event) => {
    let {name,value}=event.target;
    if(name==="nombre"){
      setNombre(value);
    }
  };
  const clicar = () => {props.reservar(nombre)};
  return (
    <Row>
      <FormGroup>
        <Label for="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="nombre del cliente"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>{" "}
      <br />
      <Button color="primary" onClick={clicar}>
        <strong>Reservar</strong>
      </Button>
    </Row>
  );
}

function Botonera(props) {
  let lista = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    for (let j = 0; j < props.listaBotones[i].length; j++) {
      if(props.listaBotones[i][j].reservado){
        lista.push(<Button color="danger" className="m-1">
          {props.listaBotones[i][j].fulano}
        </Button>)
      }else if(props.listaBotones[i][j].selecionado===true){
        lista.push(<Button color="primary" className="m-1"/>);  
      }else{
        lista.push(<Button className="m-1" onClick={() => props.clicar(i, j)} />);
      }
    }
    lista.push(<br />);
  }
  return <>{lista}</>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: JSON.parse(
        JSON.stringify(
          Array(9).fill(
            Array(9).fill({ reservado: false, selecionado: false, fulano: "" })
          )
        )
      ),
    };
  }
  clicar(i, j) {
    let copiaEstado = this.state.listaBotones;
    copiaEstado[i][j].selecionado = true;
    console.log(copiaEstado[i][j]);
    this.setState({ listaBotones: copiaEstado });
  }

  reservar(nombre) {
    let copiaBtn = this.state.listaBotones;
    for (let i = 0; i < copiaBtn.length; i++) {
      for (let j = 0; j < copiaBtn[i].length; j++) {
        if(copiaBtn[i][j].selecionado && copiaBtn[i][j].fulano === ""){
          copiaBtn[i][j].reservado=true;
          copiaBtn[i][j].fulano=nombre;
        }
      }
    }
    this.setState({listaBotones:copiaBtn});
  }
  render() {
    return (
      <div className="App">
        <Botonera
          clicar={(i, j) => this.clicar(i, j)}
          listaBotones={this.state.listaBotones}
        />
        <Cliente reservar={(nombre)=>this.reservar(nombre)}  
        />
      </div>
    );
  }
}
export default App;
