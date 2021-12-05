import CardItem from "./CardItem";
import EmptyMovie from "./EmptyMovie";
const ShowAllFilterMovies = (props) => {
    const { showFavoriteMovie, filterMovies,showFIlterMovie } = props;
    if((filterMovies.length === 0 && !showFavoriteMovie && showFIlterMovie) ){
        return <EmptyMovie/>;
    }
    //visualizar las peliculas filtradas por genero o buscada por titulo
    return (filterMovies.length > 0 && !showFavoriteMovie && showFIlterMovie) && filterMovies.map((item, index) => (<CardItem key={index} item={item} />))
}
export default ShowAllFilterMovies;