import Navegacion from './Navegacion';
import Titulo from './Titulo';
function Comp1(){
return(<div>
    <Titulo titulo={"COMPONENTE NAV"}/>
    <Navegacion 
    enlace1={{Nombre: "Titulo", Link: "./index.js"}}
    enlace2={{Nombre: "Ir de Viaje", Link: "./Ir_de_Viaje.js"}}
    enlace3={{Nombre: "Cine", Link: "./comp1.js"}}
    enlace4={{Nombre: "como estas", Link: "./comp2.js"}}
    enlace5={{Nombre: "hola", Link: "./comp3.js"}}
    enlace6={{Nombre: "comp4", Link: "./comp4.js"}}
    />
     <Navegacion 
    enlace1={{Nombre: "Titulo", Link: "./index.js"}}
    enlace2={{Nombre: "Ir de Viaje", Link: "./Ir_de_Viaje.js"}}
    enlace3={{Nombre: "Cine", Link: "./comp1.js"}}
    enlace4={{Nombre: "comp2", Link: "./comp2.js"}}
    enlace5={{Nombre: "comp3", Link: "./comp3.js"}}
    enlace6={{Nombre: "comp4", Link: "./comp4.js"}}
    />
     <Navegacion 
    enlace1={{Nombre: "Titulo", Link: "./index.js"}}
    enlace2={{Nombre: "Ir de Viaje", Link: "./Ir_de_Viaje.js"}}
    enlace3={{Nombre: "auto", Link: "./comp1.js"}}
    enlace4={{Nombre: "comp2", Link: "./comp2.js"}}
    enlace5={{Nombre: "comp3", Link: "./comp3.js"}}
    enlace6={{Nombre: "comp4", Link: "./comp4.js"}}
    />
     <Navegacion 
    enlace1={{Nombre: "Titulo", Link: "./index.js"}}
    enlace2={{Nombre: "Ir de Viaje", Link: "./Ir_de_Viaje.js"}}
    enlace3={{Nombre: "Cine", Link: "./comp1.js"}}
    enlace4={{Nombre: "comp2", Link: "./comp2.js"}}
    enlace5={{Nombre: "comp3", Link: "./comp3.js"}}
    enlace6={{Nombre: "comp4", Link: "./comp4.js"}}
    />
     <Navegacion 
    enlace1={{Nombre: "Titulo", Link: "./index.js"}}
    enlace2={{Nombre: "Ir de Viaje", Link: "./Ir_de_Viaje.js"}}
    enlace3={{Nombre: "Cine", Link: "./comp1.js"}}
    enlace4={{Nombre: "comp2", Link: "./comp2.js"}}
    enlace5={{Nombre: "comp3", Link: "./comp3.js"}}
    enlace6={{Nombre: "comp4", Link: "./comp4.js"}}
    />
    </div>
)


}
export default Comp1;