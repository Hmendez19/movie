import CardItem from "./CardItem";
import EmptyMovie from "./EmptyMovie";

const ShowAllMovies = (props) => {
    const { movies, filterMovies, showFavoriteMovie,showFIlterMovie } = props;
    const existMovie = (movies.length > 0 && filterMovies.length === 0 && !showFavoriteMovie && !showFIlterMovie);

    if (movies.length === 0) {
        return <>
            <EmptyMovie />
        </>
    }


    //Mostrar todas las peliculas
    return existMovie && movies.map((item, index) => (<CardItem key={index} item={item} />))
}

export default ShowAllMovies;