import imagen from './img.jpeg';
import './App.css';

function App() {
  const nombre = [{ name: "Aiman", edad: 20 },{ name: "Messi", edad: 37 }]; // Datos del objeto
  const caja = <div>Nombre: {nombre.name}, Edad: {nombre.edad}</div>; // Renderizar las propiedades del objeto

  return (
    <div className="App">
      <header className="App-header">
        {/* Imagen con atributo alt para accesibilidad */}
        <img src={imagen} alt="Descripción de la imagen" className="imagen" />
        
        {/* Mostrar propiedades del objeto directamente */}
        <h1>Edad: {nombre[1].edad}</h1>
        
        {/* Renderizar la variable caja */}
        <div>{caja}</div>
      </header>
    </div>
  );
}
export default App;
