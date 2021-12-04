const FavoriteIcon = (props) => {
    const { color = 'red' } = props;
    return <>
        <svg
            width='2em'
            height='2em'
            viewBox='0 0 16 16'
            className='bi bi-heart-fill'
            fill={color}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' />
        </svg>
    </>
}

export default FavoriteIcon;