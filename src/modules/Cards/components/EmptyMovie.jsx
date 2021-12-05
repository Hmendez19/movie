import camara from "../images/camera.png";
export const EmptyMovie=()=>{
    return <>
            <div className='container w-100'>
                <figure className="figure-not-movie">
                    <img src={camara} alt="Sin imagen" />
                    <figcaption> <p className="fs-2 text-white">No hay Películas que visualizar</p></figcaption>
                </figure>
            </div>
        </>
}

export default EmptyMovie;