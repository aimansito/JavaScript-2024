import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 0,
      defconLevel: 5, // Comienza en el nivel más bajo (FADE OUT)
      tabla: [
        { nombre: "COCKED PISTOL", medida: "Guerra nuclear inminente", color: "secondary" },
        { nombre: "FAST PACE", medida: "Paso previo a la guerra nuclear", color: "danger" },
        { nombre: "ROUND HOUSE", medida: "Incremento en la preparación y movilización de las tropas", color: "warning" },
        { nombre: "DOUBLE TAKE", medida: "Incremento de la vigilancia por inteligencia y extremar las medidas de seguridad", color: "success" },
        { nombre: "FADE OUT", medida: "Estado más bajo", color: "primary" }
      ]
    };
  }

  calcularDefcon = (puntos) => {
    if (puntos >= 1000) return 1;
    if (puntos >= 800) return 2;
    if (puntos >= 600) return 3;
    if (puntos >= 400) return 4;
    return 5;
  };

  handleEvento = (puntosEvento) => {
    const nuevosPuntos = this.state.puntos + puntosEvento;
    const nuevoDefcon = this.calcularDefcon(nuevosPuntos);
    
    this.setState({
      puntos: nuevosPuntos,
      defconLevel: nuevoDefcon
    });
  };

  reiniciar = () => {
    this.setState({
      puntos: 0,
      defconLevel: 5
    });
  };

  render() {
    const { defconLevel, tabla } = this.state;
    const nivelActual = tabla[defconLevel - 1] || tabla[4]; // Por defecto el nivel más bajo

    return (
      <div className='App container mt-5'>
        <h1 className='mb-4'>DEFCON</h1>
        
        <Alert color={nivelActual.color} className='mb-4'>
          <h2>{nivelActual.nombre}</h2>
          <p>{nivelActual.medida}</p>
          <p>Puntos acumulados: {this.state.puntos}</p>
          <p>Nivel actual: DEFCON {defconLevel}</p>
        </Alert>

        <div className='mb-4'>
          <Button color="danger" className='m-2' onClick={() => this.handleEvento(200)}>
            Lanzamiento cohete (suma 200)
          </Button>
          <Button color="warning" className='m-2' onClick={() => this.handleEvento(50)}>
            Conflicto fronterizo (suma 50)
          </Button>
          <Button color="info" className='m-2' onClick={() => this.handleEvento(25)}>
            Retórica belicista (suma 25)
          </Button>
        </div>

        <Button color="secondary" onClick={this.reiniciar}>
          Reiniciar DEFCON
        </Button>
      </div>
    );
  }
}

export default App;