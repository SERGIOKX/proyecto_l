import Card from './card';

function CardEnLine( {Arreglo}){

    Arreglo.map((elemento) => console.log(elemento.nombre, elemento.direccion));
    return(
            
            <div class="row position-relative">
    <div class="row position-relative">
                {Arreglo.map((elemento) => <Card contenido={{texto: elemento.texto, imagen: elemento.imagen}}
                                                 />) }
    </div>       
    </div>);

}
export default CardEnLine;
