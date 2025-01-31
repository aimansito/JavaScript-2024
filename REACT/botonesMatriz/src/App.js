import React, { useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Opcional para estilos adicionales

const FILAS = 8; // Número de filas
const COLUMNAS = 8; // Número de columnas

function App() {
  // Estado para almacenar los colores de cada botón
  const [colores, setColores] = useState(
    Array(FILAS).fill().map(() => Array(COLUMNAS).fill("lightblue"))
  );

  // Función para obtener un color aleatorio
  const obtenerColorAleatorio = () => {
    const coloresDisponibles = ["blue", "gray", "green", "yellow"];
    return coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)];
  };

  // Función principal que maneja la lógica al pulsar un botón
  const manejarClick = (fila, columna) => {
    const nuevoColor = obtenerColorAleatorio(); // Color aleatorio para este grupo
    const nuevoColores = JSON.parse(JSON.stringify(colores)); // Copia profunda del array

    // Función recursiva para colorear botones adyacentes
    const colorearAdyacentes = (f, c, colorOriginal) => {
      if (f < 0 || c < 0 || f >= FILAS || c >= COLUMNAS) return; // Límites
      if (nuevoColores[f][c] !== colorOriginal) return; // Ya tiene otro color

      // Cambiar el color del botón
      nuevoColores[f][c] = nuevoColor;

      // Llamar recursivamente a botones adyacentes
      colorearAdyacentes(f + 1, c, colorOriginal); // Abajo
      colorearAdyacentes(f - 1, c, colorOriginal); // Arriba
      colorearAdyacentes(f, c + 1, colorOriginal); // Derecha
      colorearAdyacentes(f, c - 1, colorOriginal); // Izquierda
    };

    const colorOriginal = nuevoColores[fila][columna]; // Guardar color original
    colorearAdyacentes(fila, columna, colorOriginal); // Iniciar el coloreo

    setColores(nuevoColores); // Actualizar estado
  };

  return (
    <div className="App">
      <h1>Ejercicio con Reactstrap</h1>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${COLUMNAS}, 1fr)`, gap: "6px" }}>
        {colores.map((fila, i) =>
          fila.map((color, j) => (
            <Button
              key={`${i}-${j}`}
              style={{
                backgroundColor: color,
                width: "50px",
                height: "25px",
                borderRadius: "50px", // Bordes redondeados para estilo pastilla
                border: "none",
                margin: "3px",
              }}
              onClick={() => manejarClick(i, j)}
            ></Button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
