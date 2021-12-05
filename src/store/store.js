import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { stringUnacent } from '../utils/Utils'

let movieStore = (set, get) => ({
  movies: [],
  filterMovies: [],
  genresMovies: [],
  favoriteMovies:[],
  addMovie: (movies) => {
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

    //Almacenarlo en el store
    set((state) => ({ filterMovies: _findsMovies }));
     return get().filterMovies;
  },
  addFavoriteMovie:(movie)=>{
    let arrayFavoritieMovies=[...get().favoriteMovies,movie];
    set((state) => ({ favoriteMovies: [...new Set(arrayFavoritieMovies)] }));
  }
})

movieStore = persist(movieStore, { name: 'movie_bd' })
movieStore = devtools(movieStore)
export const useMovieStore = create(movieStore)