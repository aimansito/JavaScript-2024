import React,{ Component, useState } from "react";
import { Button,Table, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Corredor = (props) => {
  const { className } = props; 

  const handleChange = (event) => {

  }
  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={()=>{ }}>
        <ModalHeader toggle={props.toggle}>Añadir Corredor</ModalHeader>
        <ModalBody>
            <FormGroup row>
              <Label sm={2}>Nombre: </Label>
              <Col sm={10}>
                <Input onChange={handleChange}
                  id="nombre"
                  name="nombre"
                  type="text"
                /> 
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Equipo: </Label>
              <Col sm={10}>
                <Input onChange={handleChange}
                  id="equipo"
                  name="equipo"
                  type="text"
                />
              </Col>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Añadir Corredor</Button>
        </ModalFooter>
      </Modal>
    </div>
  )  
}





const Mostrar = (props) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th> <th>Nombre</th> <th>Equipo</th> <th>Posición</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button>UP</Button>
              <Button>DOWN</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Button>UP</Button>
              <Button>DOWN</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaCorredores: [
        { nombre: "Eleuterio casas", equipo: "Rambito team", posicion: 1 },
        { nombre: "Francis NGanou", equipo: "Rambito Team", posicion: 2 },
        { nombre: "Emilio Anaya", equipo: "Istan team", posicion: 3 },
      ],
      isOpen: false,
    };
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="App">
        <h1>CARRERA DE ORIENTACIÓN DE ISTAN</h1>
        <Mostrar />
        <Button
          onClick={() => {
            this.toggleModal();
          }}
          color="info"
        >
          ALTA CORREDOR
        </Button>
        <Corredor mostrar={this.state.isOpen} toggle={() => this.toggleModal} />
      </div>
    );
  }
}
export default App;
