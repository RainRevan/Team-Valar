import logoCargado from './logo.svg';
import './css/App.css';
import Home from './components/nosotros';
import Navbar from './components/navbar';
import Ruta2 from './components/Ruta2';
import { Route, Link, Routes } from "react-router-dom";

function RutaX(props) {
  return (
    <div style={props.objCss}>
      <h2>Hola probando Objeto Css</h2>
    </div>
  );
}

function App() {
  //js
  //Crear un objeto Css
  let objCss = {
    border: "3px dotted red",
  };

  return (
    <div>
      <Navbar />
      <ul>
        <li><Link to={"/ruta2"}>Ir a Ruta 2</Link></li>
        <li><Link to={"/"}>Ir a Home</Link></li>
        <li><Link to={"rutax"}>Ir a Objeto Css</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home logo={logoCargado} />} />
        <Route path="/rutaX" element={<RutaX objCss={objCss} />} />
        <Route path="/ruta2" element={<Ruta2/>} />
      </Routes>
    </div>
  );
}

export default App;