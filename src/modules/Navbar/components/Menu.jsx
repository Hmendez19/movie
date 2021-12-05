import { useMovieStore } from "../../../store/store";
const Menu = () => {
    const genresMovies = useMovieStore((state) => state.genresMovies);
    const findMovie = useMovieStore((state) => state.findMovie);
    const clearFilterMovie = useMovieStore((state) => state.clearFilterMovie);
    const setStatesFavoriteMovie = useMovieStore((state) => state.setStatesFavoriteMovie);
    const setStatesFilterMovie = useMovieStore((state) => state.setStatesFilterMovie);

    const handlerFindMovieByGenres = (e, genre) => {
        e.preventDefault();
        setStatesFilterMovie(true);
        let _findMovies = findMovie(genre, true);
        //Desactivar la seccion de peliculas favoritas
        setStatesFavoriteMovie(false);
    }

    const handlerShowAllMovies = (e) => {
        e.preventDefault();
        // Se limpia el filtro para solo visualizar todas las peliculas
        clearFilterMovie();

        // desactivar la seccion de peliculas favoritas
        setStatesFavoriteMovie(false);
    }

    const handlerShowFavoriteMovies = (e) => {
        e.preventDefault();
        // Se limpia el filtro para solo visualizar las peliculas favoritas
        clearFilterMovie();

        // activar la seccion de peliculas favoritas
        setStatesFavoriteMovie(true);
    }

    return <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
                <button className="nav-link nav-link-menu" onClick={(e) => handlerShowAllMovies(e)}>Todas</button>
            </li>
            <li className="nav-item">
                <button className="nav-link nav-link-menu" onClick={(e) => handlerShowFavoriteMovies(e)}>Favoritos</button>
            </li>
            <li className="nav-item dropdown">
                <button className="nav-link  nav-link-menu dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Géneros
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                        genresMovies.map((genre, index) => <li key={index}><button className="dropdown-item" onClick={(e) => handlerFindMovieByGenres(e, genre)}>{genre}</button></li>)
                    }
                </ul>
            </li>
        </ul>
    </>
}


export default Menu;