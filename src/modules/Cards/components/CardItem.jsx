import FavoriteIcon from "./FavoriteIcon";
import ShareIcon from "./ShareIcon";
import { ModalManager } from "react-dynamic-modal";
import Swal from 'sweetalert2';
import ModalShare from "../../ModalShare/ModalShare";
import { convertLocalDate } from "../../../utils/Utils";
import { useMovieStore } from "../../../store/store";
import { useEffect, useState } from "react";
const CardItem = (props) => {
    const { item, isFavorite = false } = props;
    const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);
    const { title, info } = item;
    const { image_url, release_date, genres } = info;

    const addFavoriteMovie = useMovieStore((state) => state.addFavoriteMovie);
    const favoriteMovies = useMovieStore((state) => state.favoriteMovies);
    const flag=(favoriteMovies.length>0 && favoriteMovies.find(mv => mv.info.image_url === image_url)!==undefined);


    const handlerFavoriteclick = (e,_flag) => {
        e.preventDefault();

        setIsFavoriteItem(prev => {
            let _stateFavorite = !_flag;
            addFavoriteMovie(item, _stateFavorite);
            Swal.fire({
                title: title,
                text: _stateFavorite ? 'Agregado a favorito' : "Removido de favorito",
                icon: 'success',
                showConfirmButton: false,
                timer: 3500
            });
            return _stateFavorite;
        });

    }

    const handlerShareclick = (e) => {
        e.preventDefault();
        ModalManager.open(<ModalShare item={item} handlerSendMailer={handlerSendMailer} onRequestClose={() => console.log("Modal cerrado")} />);
    }

    const handlerSendMailer = (e, item) => {
        e.preventDefault();
        console.log(item);
    }

    return <>
        <div className="col">
            <div className="card h-100">
                <img src={image_url} className="card-img-top card-img-movie" alt={`Sin imagen ${title}`} />
                <div className="card-body">
                    <div className='container-body-title'>
                        <h5 className="card-title fs-4">{title}</h5>
                        <button className='button-wrapper-icon' title="Clic para compartir película" onClick={(e) => handlerShareclick(e)} >
                            <ShareIcon />
                        </button>

                    </div>
                    <div>
                        <div>
                            <label className='fw-bold d-block'>Genero:</label>
                            <span>{genres.toString()}.</span>
                        </div>
                        <div>
                            <label className='fw-bold d-block'>fecha de estreno:</label>
                            <span>{convertLocalDate(release_date)}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-dark">
                    {
                        flag && <span className='text-light'>Remover de favoritos</span>
                    }
                    {
                        !flag && <span className='text-light'>Agregar a favoritos</span>
                    }
                    <button className='button-wrapper-icon' title="Clic para agregar/quitar a favorito" onClick={(e) => handlerFavoriteclick(e,flag)} >
                        <FavoriteIcon isFavoriteItem={flag} />
                    </button>
                </div>
            </div>
        </div>
    </>
}


export default CardItem;