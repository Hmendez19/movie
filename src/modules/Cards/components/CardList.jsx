import { useMovieStore } from "../../../store/store";
import ShowAllFavoriteMovies from "./ShowAllFavoriteMovies";
import ShowAllFilterMovies from "./ShowAllFilterMovies";
import ShowAllMovies from "./ShowAllMovies";
import ShowMovieByDateRange from "./ShowMovieByDateRange";

const CardList = () => {
    const movies = useMovieStore((state) => state.movies);
    const filterMovies = useMovieStore((state) => state.filterMovies);
    const showFIlterMovie = useMovieStore((state) => state.showFIlterMovie);
    const showFavoriteMovie = useMovieStore((state) => state.showFavoriteMovie);
    const favoriteMovies = useMovieStore((state) => state.favoriteMovies);
    const dataDateRange = useMovieStore((state) => state.dataDateRange);
   
    return <>
        <div className="row row-cols-1 row-cols-md-4 mb-4 g-4">
            <ShowMovieByDateRange dataDateRange={dataDateRange}/>
            <ShowAllFavoriteMovies dataDateRange={dataDateRange} showFavoriteMovie={showFavoriteMovie} favoriteMovies={favoriteMovies} />
            <ShowAllFilterMovies dataDateRange={dataDateRange} showFIlterMovie={showFIlterMovie} showFavoriteMovie={showFavoriteMovie} filterMovies={filterMovies} />
            <ShowAllMovies dataDateRange={dataDateRange} showFIlterMovie={showFIlterMovie}  movies={movies} filterMovies={filterMovies} showFavoriteMovie={showFavoriteMovie} />
        </div>
    </>
}

export default CardList;