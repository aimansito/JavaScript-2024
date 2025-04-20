import React, { Component, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cliente(props) {
  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    if (target.name == "nombre") {
      setNombre(target.value);
    }
  };
  const clicar = () => {
    if (nombre == "") return;
    props.reservar(nombre);
  };

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
      </FormGroup>
      <br />
      <Button color="primary" onClick={clicar}>
        <strong>Reservar</strong>
      </Button>
    </Row>
  );
}

function Botonera(props) {
  let k = 0;
  let lista = [];
  for (let i = 0; i < 9; i++) {
    lista.push(<br key={k++} />);
    for (let j = 0; j < 9; j++) {
      if (props.listaBotones[i][j].reservado) {
        lista.push(
          <Button key={k++} color="danger">
            {props.listaBotones[i][j].fulano}
          </Button>
        );
      } else {
        if (props.listaBotones[i][j].seleccionado) {
          lista.push(
            <Button key={k++} color={"primary"}>
              {props.listaBotones[i][j].numero}
            </Button>
          );
        } else {
          lista.push(
            <Button
              key={k++}
              color={"secondary"}
              onClick={() => props.clicar(i, j)}
            />
          );
        }
      }
    }
  }
  return lista;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: JSON.parse(
        JSON.stringify(
          Array(9).fill(
            Array(9).fill({ reservado: false, seleccionado: false, fulano: "" })
          )
        )
      ),
    };
  }

  clicar(i, j) {
    console.log("clicado" + i + j);
    let l = this.state.listaBotones;
    if (l[i][j].reservado === false) {
      l[i][j].seleccionado = true;
    }
    this.setState({ listaBotones: l });
  }

  reservar(nombre) {
    console.log("reservar------->" + nombre);
    let l = this.state.listaBotones.map((f) =>
      f.map((b) => {
        if (b.seleccionado) {
          b.seleccionado = false;
          b.reservado = true;
          b.fulano = nombre;
        }
        return b;
      })
    );

    console.log("reservado" + nombre);
    this.setState({ listaBotones: l });
  }

  render() {
    return (
      <div className="App">
        <Botonera
          listaBotones={this.state.listaBotones}
          clicar={(i, j) => this.clicar(i, j)}
        />
        <Cliente reservar={(nombre) => this.reservar(nombre)} />
      </div>
    );
  }
}

export default App;
