function Card( {contenido}) {
    return(
            <div class="card mx-auto" style={{width: 18 + "rem", top: 50 + "px"}} >
                <img src={contenido.imagen} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text">{contenido.texto}</p>
            
                </div>
            </div>
            );
}
export default Card;