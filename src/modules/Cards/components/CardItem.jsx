import FavoriteIcon from "./FavoriteIcon";
const CardItem = () => {
    return <>
        <div className="col">
            <div className="card h-100">
                <img src="https://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg" className="card-img-top card-img-movie" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-4">Rush</h5>
                    <div>
                        <div>
                            <label className='fw-bold d-block'>Genero:</label>
                            <span>Action,Biography,Drama,port.</span>
                        </div>
                        <div>
                            <label className='fw-bold d-block'>fecha de estreno:</label>
                            <span>2013-09-02</span>
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