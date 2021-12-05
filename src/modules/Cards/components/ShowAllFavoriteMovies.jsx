import CardItem from "./CardItem";
import EmptyMovie from "./EmptyMovie";
const ShowAllFavoriteMovies = (props) => {
    const { showFavoriteMovie, favoriteMovies} = props;
    const notEmptyFavoriteMovie = (showFavoriteMovie && favoriteMovies.length > 0);
    if (favoriteMovies.length===0 && showFavoriteMovie) {
        return <EmptyMovie />
    }
    //Visualziar todas las peliculas favoritas
    return notEmptyFavoriteMovie && favoriteMovies.map((item, index) => (<CardItem key={index} item={item} isFavorite={true} />));
}

export default ShowAllFavoriteMovies;