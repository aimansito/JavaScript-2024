import { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const PIELES = [
  {
    id: 0,
    imagen:
      "https://pielparaartesanos.com/cdn/shop/files/Cabra_laminada_oro.jpg",
    nombre: "Cabra laminada oro",
    texto: "Cabra laminada con acabado arrugado en color oro",
  },
  {
    id: 0,
    imagen:
      "https://pielparaartesanos.com/cdn/shop/files/Vacuno_encerado_lodo.jpg",
    nombre: "Vacuno_encerado_lodo",
    texto:
      "Dale un toque unico y resistente a tus productos artesanales con este material de alta calidad",
  },
  {
    id: 2,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/RST_420.jpg",
    nombre: "Vacuno flor burdeos",
    texto: "la piel de vacuno es ideal para bolsos de calidad",
  },
];
function Producto(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={props.img} alt={props.nombre} />
      <CardBody>
        <CardTitle tag="h5">{props.nombre}</CardTitle>
        <CardText>{props.texto}</CardText>
        <Button color="primary" onClick={()=>props.clicar(props.id,1)}>Comprar</Button>
      </CardBody>
    </Card>
  );
}
function ShowProductos(props) {  
    let lista = props.lista.map(e=><Producto 
      id={e.id} 
      img={e.imagen} 
      nombre={e.nombre} 
      texto={e.texto} 
      clicar={(p,c)=>props.modificar(p,c)}/>
  )
  return <>{lista}</>
}
const VentanaModal = (props) => {
  const { className } = props;
  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>CARRITO DE LA COMPRA</ModalHeader>
        <ModalBody>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.toggle()}>
            CERRAR
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProductos: PIELES,
    };
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <>
        <Button color="primary" onClick={() => this.toggleModal()}>
          Carrito
        </Button>
        <ShowProductos />
        <VentanaModal
          mostrar={this.state.isOpen}
          toggle={() => this.toggleModal()}
        />
      </>
    );
  }
}
export default App;
