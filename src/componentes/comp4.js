import PieDePagina from './PieDePagina';
import Titulo from './Titulo';
function Comp4(){
return(<div>
    <Titulo titulo={"COMPONENTE PIE DE PAGINA"}/>
    
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>
    <PieDePagina PieDePag={{correo:"sergioInf@gmail.com",telefono: "79674241", derecho: "este sitio se encuentra portegido por derechos de autor"}}/>

    </div>
)


}
export default Comp4;