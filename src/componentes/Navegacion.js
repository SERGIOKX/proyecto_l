
function Navegacion({enlace1, enlace2, enlace3, enlace4,enlace5, enlace6 }) {
return (
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
        <div class="container-fluid ">
            <a class="navbar-brand text-dark fs-2 bg-warning border border-white border-5 p-2 fw-bold " href={enlace1.Link}>TURISMO EN BOLIVIA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href={enlace2.Link}>{enlace2.Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href={enlace3.Link}>{enlace3.Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href={enlace4.Link}>{enlace4.Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href={enlace5.Link}>{enlace5.Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href={enlace6.Link}>{enlace6.Nombre}</a>
                    </li>

                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-light fw-bold " type="submit">Buscar</button>
                </form> &nbsp;&nbsp;
                <button type="button" class="btn btn-warning fw-bold " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Inicio Sesion
                </button>
            </div>
        </div>
    </nav>
</div>
        );
        }

export default Navegacion;