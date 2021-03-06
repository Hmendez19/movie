const FavoriteIcon = (props) => {
    const { isFavoriteItem} = props;
    return <>
        <svg
            title='Agregar a favorito'
            width='2em'
            height='2em'
            viewBox='0 0 16 16'
            className='bi bi-heart-fill favorite-icon'
            fill={isFavoriteItem?'red':'white'}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' />
        </svg>
    </>
}

export default FavoriteIcon;