import { useMovieStore } from "../../../store/store";
import Swal from 'sweetalert2';
const Menu = () => {
    const genresMovies = useMovieStore((state) => state.genresMovies);
    const findMovie = useMovieStore((state) => state.findMovie);
    const handlerFindMovieByGenres=(e,genre)=>{
        e.preventDefault();
        let _findMovies=findMovie(genre,true);
        if(_findMovies.length===0 || _findMovies===undefined){
            Swal.fire({
                title: 'Aviso',
                text: `No se encontraron películas en este género: ${genre}`,
                icon: 'info',
                showConfirmButton: false,
                timer:4000
              });
        }
    }

    return <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
                <button className="nav-link nav-link-menu">Todas</button>
            </li>
            <li className="nav-item">
                <button className="nav-link nav-link-menu">Favoritos</button>
            </li>
            <li className="nav-item dropdown">
                <button className="nav-link  nav-link-menu dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Géneros
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                        genresMovies.map((genre, index) => <li key={index}><button className="dropdown-item" onClick={(e)=>handlerFindMovieByGenres(e,genre)}>{genre}</button></li>)
                    }
                </ul>
            </li>
        </ul>
    </>
}


export default Menu;