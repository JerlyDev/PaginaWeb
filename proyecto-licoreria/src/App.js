import './App.css';
import logo from "./assets/destapalaya.png"

function App() {
  return (
    <div>
      <div class="encabezado"> 
        <div class="encabezado-izquierda">
          <img class="img-logo" src={logo} alt="Logo" />
          <input class="input-busqueda" placeholder="Serch"></input>
        </div>
        <div class="encabezado-derecha">
          <ul class="bloque-inicio">            
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Cuenta</li>
            <li>Promos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
