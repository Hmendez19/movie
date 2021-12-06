import CardItem from "./CardItem";
import EmptyMovie from "./EmptyMovie";
const ShowAllFavoriteMovies = (props) => {
    const { showFavoriteMovie, favoriteMovies,dataDateRange} = props;
    const notEmptyFavoriteMovie = (showFavoriteMovie && favoriteMovies.length > 0);
    if (favoriteMovies.length===0 && showFavoriteMovie) {
        return <EmptyMovie />
    }
    //Visualziar todas las peliculas favoritas
    return (notEmptyFavoriteMovie && dataDateRange.length===0) && favoriteMovies.map((item, index) => (<CardItem key={index} item={item} isFavorite={true} />));
}

export default ShowAllFavoriteMovies;