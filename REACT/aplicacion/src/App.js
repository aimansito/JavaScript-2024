import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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

export default function App() {
  const [logged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);

  const userLogin = (telefono, password) => {
    if (telefono === "aiman" && password === "2023") {
      setLogged(true);
      fetchProducts();
    }
  };

  const fetchProducts = () => {
    const pieles = [
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
    setProducts(pieles);
  };

  return (
    <div className="App">
      {!logged && <AppLogin userLogin={userLogin} />}
      {logged && (
        <div className="text-center mt-5">
          <h2>Has iniciado sesión</h2>
          <ProductList products={products} />
        </div>
      )}
    </div>
  );
}

function AppLogin({ userLogin }) {
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [info, setInfo] = useState("");

  const handleChange = (event) => {
    setInfo("");
    const target = event.target;
    if (target.name === "password") {
      setPassword(target.value);
    }
    if (target.name === "telefono") {
      setTelefono(target.value);
    }
  };

  const clicar = () => {
    if (password === "" || telefono === "") {
      setInfo("Complete todos los campos");
    } else {
      if (telefono === "aiman" && password === "2023") {
        userLogin(telefono, password);
      } else {
        setInfo("Usuario o contraseña incorrectos");
      }
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col sm="4">
        <Card body>
          <CardTitle className="text-center" tag="h4">
            Iniciar Sesión
          </CardTitle>
          <Form>
            <FormGroup>
              <Label for="Telefono">Nombre</Label>
              <Input
                id="Telefono"
                name="telefono"
                placeholder="Introduce tu nombre"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Contraseña</Label>
              <Input
                id="Password"
                name="password"
                type="password"
                placeholder="Introduce la contraseña"
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary" size="lg" block onClick={clicar}>
              <strong>Iniciar Sesión</strong>
            </Button>
            <CardText className="text-danger text-center mt-2">{info}</CardText>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

function ProductList({ products }) {
  return (
    <Row className="justify-content-center mt-4">
      <Col sm="6">
        <Card body>
          <CardTitle className="text-center" tag="h4">
            Productos Disponibles
          </CardTitle>
          <ul className="list-group">
            {products.map((product) => (
              <li key={product.id} className="list-group-item">
                {product.imagen} - {product.nombre} - {product.texto}
              </li>
            ))}
          </ul>
        </Card>
      </Col>
    </Row>
  );
}
