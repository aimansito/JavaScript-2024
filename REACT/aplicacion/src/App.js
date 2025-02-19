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
  const [message, setMessage] = useState("");

  const userLogin = async (telefono, password) => {
    try {
      const response = await fetch("http://localhost/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telefono, password }),
      });

      const data = await response.json();

      if (data.success) {
        setLogged(true);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMessage("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="App">
      {!logged ? (
        <AppLogin userLogin={userLogin} message={message} />
      ) : (
        <h2 className="text-center mt-5">Has iniciado sesión</h2>
      )}
    </div>
  );
}

function AppLogin({ userLogin, message }) {
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") setPassword(value);
    if (name === "telefono") setTelefono(value);
  };

  const handleSubmit = () => {
    if (!telefono || !password) {
      alert("Complete todos los campos");
      return;
    }
    userLogin(telefono, password);
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
            <Button color="primary" size="lg" block onClick={handleSubmit}>
              <strong>Iniciar Sesión</strong>zº
            </Button>
            {message && <CardText className="text-danger text-center mt-2">{message}</CardText>}
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
