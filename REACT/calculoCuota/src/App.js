import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {
  Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
 } from 'reactstrap';
 
const VentanaModal = (props) => {
  const { className } = props;
  const handleChange = (event) => {
    // COMPLETA ESTA FUNCION
  }
 
  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LA VENTANA"}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2} > Cantidad a pedir: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id="total"
                name="total"
                type="Text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleChange} onClick={handleChange}
                id="tae"
                name="tae"
                type="select"
              >
                <option>5%</option>
                <option>6%</option>
                <option>7%</option>
                <option>8%</option>
                <option>9%</option>
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>props.aceptar("NECESITA DATOS")}>{props.botonAceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen:false,
    }
  }
  
  setIsOpen(d){
    if (d===undefined) return;
    this.setState({isOpen:d})
  }
  
  aceptar(datos){
    console.log(datos);
    this.toggleModal();
  }

  toggleModal(){this.setIsOpen(!this.state.isOpen)}

  render() {
    return (
      <div className="App">
        <Button onClick={()=>{this.toggleModal()}}>
          Dale
        </Button>
        <VentanaModal 
            aceptar={(datos)=>this.aceptar(datos)}
            mostrar={this.state.isOpen}
            botonAceptar={"Calcular"}
            titulo={"CALCULO DE TU CUOTA"}
        />
      </div>
    );
  }
}
export default App;