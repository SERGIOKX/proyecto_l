import Formulario from './Formulario';
import Titulo from './Titulo';
function Comp3(){
return(<div>
    <Titulo titulo={"COMPONENTE FORMULARIO"}/>
    <Formulario Formul={["Usuario","contra","Ci","Telefono"]}
         />
         
    </div>
)


}
export default Comp3;