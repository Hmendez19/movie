const Menu = () => {
    return <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
                <button className="nav-link nav-link-menu">Favoritos</button>
            </li>
            <li className="nav-item dropdown">
                <button className="nav-link  nav-link-menu dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Géneros
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><button className="dropdown-item">Acción</button></li>
                    <li><button className="dropdown-item">Comedia</button></li>
                    <li><button className="dropdown-item">Drama</button></li>
                    <li><button className="dropdown-item">Suspenso</button></li>
                    <li><button className="dropdown-item">Miedo</button></li>
                </ul>
            </li>
        </ul>
    </>
}


export default Menu;