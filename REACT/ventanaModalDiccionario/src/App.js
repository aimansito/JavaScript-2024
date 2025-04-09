import React, { useState,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert,Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input , Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';

const VentanaModalDiccionario = (props) =>{
  const {
    className
  } = props;
}

const handleChange = (event) =>{
  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={"VENTANA"}>
  
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label sm={2}>Filtrar: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
              id='filtro'
              name='filtro'
              type='texto'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleChange} onClick={handleChange} 
              id='selectMulti'
              name='selectMulti'
              type='select'
              />
              <option>CODIGO1|DESCRIPCION1</option> 
              <option>CODIGO2|DESCRIPCION2</option> 
              <option>CODIGO3|DESCRIPCION3</option> 
              <option>CODIGO4|DESCRIPCION4</option> 
              <option>CODIGO5|DESCRIPCION5</option> 
            </Col>
          </FormGroup>
        </ModalBody>
              <ModalFooter>
              {"AQUÍ VA EL FÁRMACO ELEGIDO"}<Button color="primary"
        onClick={() => {
        }}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
}


const Filter = (props)=>{
 
  return(
    <>
      <div>
        <UncontrolledAccordion
          defaultOpen = {[
            '1'
          ]}
          stayOpen
        >
          <AccordionItem>
            <AccordionHeader targetId='1'>
                GESTIÓN DE FÁRMACOS
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Row>
                <Col>
                  <Alert color = "info">
                    Incluir X medicamentos:
                    <Input type='textarea' name='rxseleccionar' />
                    <Button color='info'>Add</Button>
                    {" "}<Button color='info' onClick={""}>Clear</Button>  
                  </Alert>  
                </Col>
                <Col>
                  <Alert color='danger'>
                    Excluir X medicamentos:
                    <Input type='textarea' name='rxenmascarar' />
                    <Button color='danger'>Add</Button>
                    {" "}<Button color='info' onClick={""}>Clear</Button>
                  </Alert>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
    </>
  )
}
class App extends Component {
  render(){
    return(
      <div className='App'>
        <Filter/>
      </div>
    );
  }
}
export default App; 