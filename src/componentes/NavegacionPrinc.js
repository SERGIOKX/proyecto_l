import { Link, Outlet } from 'react-router-dom';
import Navegacion from './Navegacion';

const NavegacionPrinc = ({enlace1, enlace2, enlace3, enlace4,enlace5, enlace6}) =>{
return(
<div>
     <Navegacion enlace1={{Nombre: "Titulo", Link: enlace1.Links}}
                enlace2={{Nombre: enlace2.Nombre, Link: enlace2.Links}}
                enlace3={{Nombre: enlace3.Nombre, Link: enlace3.Links}}
                enlace4={{Nombre: enlace4.Nombre, Link: enlace4.Links}}
                enlace5={{Nombre: enlace5.Nombre, Link: enlace5.Links}}
                enlace6={{Nombre: enlace6.Nombre, Link: enlace6.Links}}/>
   
<Outlet/>
    </div>
);

}
export default NavegacionPrinc;