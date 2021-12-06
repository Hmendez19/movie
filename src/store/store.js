import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { convertLocalDate, stringUnacent } from '../utils/Utils'

let movieStore = (set, get) => ({
  movies: [],
  filterMovies: [],
  genresMovies: [],
  favoriteMovies: [],
  showFavoriteMovie: false,
  showFIlterMovie: false,
  dataDateRange: [],
  clearFilterMovie: () => {
    set((state) => ({ filterMovies: [] }));
    set((state) => ({ dataRangeDate: [] }));
    get().setStatesFilterMovie(false);
  },
  clearDateRange: () => {
    set((state) => ({ dataDateRange: [] }));
  },
  setStatesFavoriteMovie: (_state) => {
    set((state) => ({ showFavoriteMovie: _state }));
  },
  setStatesFilterMovie: (_state) => {
    set((state) => ({ showFIlterMovie: _state }));
  },
  findMovieByDateRange: (_dateRange = []) => {
    let isFavorite = get().showFavoriteMovie;
    let isFilter = get().showFIlterMovie;

    if (_dateRange.length === 0) {
      get().clearDateRange();
      if (isFavorite) {
         get().clearFilterMovie();
      } else if (isFilter) {
        get().setStatesFavoriteMovie(false);
      } else {
        get().setStatesFavoriteMovie(false);
        get().clearFilterMovie();
      }
    } else {
      let _tmpDataRange = [];

      if (isFavorite) {
        _tmpDataRange = get().favoriteMovies;
      } else if (isFilter) {
        _tmpDataRange = get().filterMovies;
      } else {
        _tmpDataRange = get().movies;
      }

      _tmpDataRange = _tmpDataRange.filter(item => {
        const { info } = item;
        const { release_date } = info;
        let _releaseDate = convertLocalDate(release_date);
        let arrayReleaseDate = _releaseDate.split(" ");
        _releaseDate = arrayReleaseDate[0];
        return (_dateRange.includes(_releaseDate)) && item;
      });

      set((state) => ({ dataDateRange: _tmpDataRange }));
    }

  },
  addMovie: (movies) => {

    /*Filtrar los generos para luego almacenarlo y mostrarlo en la lista */
    let _genres = "";
    movies.filter((_item) => {
      // Obtener los generos
      let _info = _item.info;
      let { genres } = _info;
      _genres += genres.toString();
    });

    let notRepeatGenres = new Set(_genres.split(","));
    let _arrayGenresMovies = [...notRepeatGenres];
    _arrayGenresMovies.sort();
    set((state) => ({ genresMovies: _arrayGenresMovies }))

    //almacenar las peliculas
    set((state) => ({ movies }))
  },
  findMovie: (query, onlyGenre = false) => {

    const _movies = get().movies
    let _query = stringUnacent(query);
    let _findsMovies = [];
    _movies.filter((_item) => {

      // Buscar por género
      let _info = _item.info;
      let { genres } = _info;
      let _genres = genres.toString();
      _genres = stringUnacent(_genres);

      if (_genres.indexOf(_query) !== -1) {
        _findsMovies.push(_item);
      }

      if (!onlyGenre) {
        //Buscar por título
        let searchValue = _item.title;
        searchValue = stringUnacent(searchValue);
        if (searchValue.indexOf(_query) !== -1) {
          _findsMovies.push(_item);
        }
      }

      return _findsMovies;
    });

    get().setStatesFavoriteMovie(false);
    get().setStatesFilterMovie(true);

    //Almacenarlo en el store
    set((state) => ({ filterMovies: _findsMovies }));
    return get().filterMovies;
  },
  addFavoriteMovie: (movie, isFavoritie) => {
    let arrayFavoritieMovies = [...get().favoriteMovies, movie];
    let _arrayFavoritieMovies = [...new Set(arrayFavoritieMovies)];

    if (!isFavoritie) {
      _arrayFavoritieMovies = _arrayFavoritieMovies.filter(item => {
        const { info } = item;
        const { image_url } = info;
        return (image_url !== movie.info.image_url) && item;
      });
    }

    set((state) => ({ favoriteMovies: _arrayFavoritieMovies }));
  }
})

movieStore = persist(movieStore, { name: 'movie_bd' })
movieStore = devtools(movieStore)
export const useMovieStore = create(movieStore)