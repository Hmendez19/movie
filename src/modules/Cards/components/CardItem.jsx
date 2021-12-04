import FavoriteIcon from "./FavoriteIcon";
import ShareIcon from "./ShareIcon";
const CardItem = ({item}) => {
    console.log(item);
    const {title,info}=item;
    const {image_url,release_date}=info;
    return <>
        <div className="col">
            <div className="card h-100">
                <img src={image_url} className="card-img-top card-img-movie" alt="..." />
                <div className="card-body">
                    <div className='container-body-title'>
                        <h5 className="card-title fs-4">{title}</h5>
                        <ShareIcon/>
                    </div>
                    <div>
                        <div>
                            <label className='fw-bold d-block'>Genero:</label>
                            <span>Action,Biography,Drama,port.</span>
                        </div>
                        <div>
                            <label className='fw-bold d-block'>fecha de estreno:</label>
                            <span>{release_date}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-dark">
                    <span className='text-light'>Agregar a favoritos</span>
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    </>
}


export default CardItem;