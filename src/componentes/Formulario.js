function Formulario({Formul}) {


return(
        <div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Inicio Sesion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    {

        Formul.map((elefrom) => <div><label for="recipient-name" class="col-form-label">{elefrom}:</label>
                        <input type="text" class="form-control" id="recipient-name"></input></div>)
                    }


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
                    <button type="button" class="btn btn-primary">Iniciar</button>
                </div>
            </div>
        </div>
    </div></div>
        );
        }
export default Formulario;