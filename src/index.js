import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacion from './componentes/Navegacion.js';
import Card from './componentes/card.js'
import NavegacionPrinc from './componentes/NavegacionPrinc';
import CardEnLinea from './componentes/CardEnLinea';
import Formulario from './componentes/Formulario';
import PieDePagina from './componentes/PieDePagina';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*<React.StrictMode>
  <Navegacion  enlace1={{Nombre: "Titulo", Links: "/"}}
                enlace2={{Nombre: "Ir de Viaje", Links: "Ir de viaje"}}
                enlace3={{Nombre: "comp1", Links: "./comp1"}}
                enlace4={{Nombre: "comp2", Links: "./comp2"}}
                enlace5={{Nombre: "comp3", Links: "./comp3"}}
                enlace6={{Nombre: "comp4", Links: "./comp4"}}/>
<CardEnLinea Arreglo={
                    [{texto: "Es un sitio céntrico y pintoresco rodeado de todo tipo de restaurantes y cerca a avenidas principales Exelente lugar en el barrio de Sopocachi, donde uno puede relajarse, leer un libro o tomarse in helado.", imagen: "./plaza-abaroa.jpg"},
                        {texto: "Convoca tu coraje y conquista el camino más peligroso del mundo en un emocionante recorrido en bicicleta de montaña por el Camino de la Muerte de Bolivia. Siga a un guía profesional cuesta abajo por 40 millas en una carretera delgada.", imagen: "./25.jpg"},
                        {texto: "Vístete, ata y rappel al costado de un edificio de 17 pisos en La Paz, parte de una aventura única de 1 hora que combina los deportes extremos con un juego de disfraces surrealista. Elija su traje, canal del Capitán América, Batman o Santa Claus, y luego aprenda los conceptos básicos de seguridad y técnica..", imagen: "./c4.jpg"},
                        {texto: "Vístete, ata y rappel al costado de un edificio de 17 pisos en La Paz, parte de una aventura única de 1 hora que combina los deportes extremos con un juego de disfraces surrealista. Elija su traje, canal del Capitán América, Batman o Santa Claus, y luego aprenda los conceptos básicos de seguridad y técnica..", imagen: "./c4.jpg"}

                                 ]}/> 
<CardEnLinea Arreglo={
                    [{texto: "Es un sitio céntrico y pintoresco rodeado de todo tipo de restaurantes y cerca a avenidas principales Exelente lugar en el barrio de Sopocachi, donde uno puede relajarse, leer un libro o tomarse in helado.", imagen: "./plaza-abaroa.jpg"},
                        {texto: "Convoca tu coraje y conquista el camino más peligroso del mundo en un emocionante recorrido en bicicleta de montaña por el Camino de la Muerte de Bolivia. Siga a un guía profesional cuesta abajo por 40 millas en una carretera delgada.", imagen: "./25.jpg"},
                        {texto: "Vístete, ata y rappel al costado de un edificio de 17 pisos en La Paz, parte de una aventura única de 1 hora que combina los deportes extremos con un juego de disfraces surrealista. Elija su traje, canal del Capitán América, Batman o Santa Claus, y luego aprenda los conceptos básicos de seguridad y técnica..", imagen: "./c4.jpg"},
                        {texto: "Vístete, ata y rappel al costado de un edificio de 17 pisos en La Paz, parte de una aventura única de 1 hora que combina los deportes extremos con un juego de disfraces surrealista. Elija su traje, canal del Capitán América, Batman o Santa Claus, y luego aprenda los conceptos básicos de seguridad y técnica..", imagen: "./c4.jpg"}

                                 ]}/>                                  
 <Formulario Formul={["Usuario","contra","Ci","Telefono"]}
         />
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>
                                 
   
</React.StrictMode>*/


  <React.StrictMode>
  
    <BrowserRouter>
    <App />   
    </BrowserRouter>
      
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
