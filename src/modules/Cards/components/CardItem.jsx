import FavoriteIcon from "./FavoriteIcon";
import ShareIcon from "./ShareIcon";
import { ModalManager } from "react-dynamic-modal";
import Swal from 'sweetalert2';
import ModalShare from "../../ModalShare/ModalShare";
import {convertLocalDate} from "../../../utils/Utils";
const CardItem = ({ item }) => {
    const { title, info } = item;
    const { image_url, release_date, genres } = info;

    const handlerFavoriteclick = (e) => {
        e.preventDefault();
        Swal.fire({
            title: title,
            text: 'Agregado a favorito',
            icon: 'success',
            showConfirmButton: false,
            timer: 3500
          });
        console.log("Favorite", item);
    }

    const handlerShareclick = (e) => {
        e.preventDefault();
        console.log("Share", item);
        ModalManager.open(<ModalShare item={item} handlerSendMailer={handlerSendMailer} onRequestClose={() => console.log("Modal cerrado")}/>);
    }

    const handlerSendMailer=(e,item)=>{
        e.preventDefault();
        console.log(item);
    }

    return <>
        <div className="col">
            <div className="card h-100">
                <img src={image_url} className="card-img-top card-img-movie" alt="..." />
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
                    <span className='text-light'>Agregar a favoritos</span>
                    <button className='button-wrapper-icon' title="Clic para agregar/quitar a favorito" onClick={(e) => handlerFavoriteclick(e)} >
                        <FavoriteIcon />
                    </button>
                </div>
            </div>
        </div>
    </>
}


export default CardItem;