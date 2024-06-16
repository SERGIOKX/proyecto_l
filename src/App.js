import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavegacionPrinc from './componentes/NavegacionPrinc';
import CardEnLinea from './componentes/CardEnLinea';
import Formulario from './componentes/Formulario';
import PieDePagina from './componentes/PieDePagina';
import Comp1 from './componentes/comp1.js';
import Comp2 from './componentes/comp2.js';
import Comp3 from './componentes/comp3.js';
import Comp4 from './componentes/comp4.js'
function App() {
  return (
    <div>
<Routes>
  <Route path='/' element={<div><NavegacionPrinc 
                enlace1={{Nombre: "Titulo", Links: "/"}}
                enlace2={{Nombre: "Ir de Viaje", Links: "Ir de viaje"}}
                enlace3={{Nombre: "comp1", Links: "./comp1"}}
                enlace4={{Nombre: "comp2", Links: "./comp2"}}
                enlace5={{Nombre: "comp3", Links: "./comp3"}}
                enlace6={{Nombre: "comp4", Links: "./comp4"}}/>
                          </div>}>



                <Route path='comp1' element={<Comp1 />}/>
                <Route path='comp2' element={<Comp2 />}/>
                <Route path='comp3' element={<Comp3 />}/>
                <Route path='comp4' element={<Comp4 />}/>
  </Route>
 
</Routes>

    </div>
  );
}

export default App;
