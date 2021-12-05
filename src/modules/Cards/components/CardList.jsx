import { useMovieStore } from "../../../store/store";
import CardItem from "./CardItem";

const CardList = () => {
    const movies = useMovieStore((state) => state.movies);
    const filterMovies = useMovieStore((state) => state.filterMovies);
    return <>
        <div className="row row-cols-1 row-cols-md-4 mb-4 g-4">
            {
                filterMovies.length > 0 && filterMovies.map((item, index) => (<CardItem key={index} item={item} />))
            }
            {
                movies.length > 0 && movies.map((item, index) => (<CardItem key={index} item={item} />))
            }
        </div>
    </>
}

export default CardList;