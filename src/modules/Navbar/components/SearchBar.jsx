import { useState } from "react";
import { useMovieStore } from "../../../store/store";

const SearchBar = (props) => {
    const { placeholder } = props;
    const findMovie = useMovieStore((state) => state.findMovie);
    const [globalTimeOut, setGlobalTimeOut] = useState(null);

    const handlerChangeFindMovie = (e) => {
        e.preventDefault();
        let valueSearch = e.target.value;
        if (valueSearch.length > 2) {
            let lastValueSearch = valueSearch;
            if (globalTimeOut !== null) clearTimeout(globalTimeOut);

            let _global_time_out = setTimeout(function () {
                setGlobalTimeOut(null);
                if (valueSearch === lastValueSearch) {
                    let _movies = findMovie(valueSearch);
                }
            }, 500);

            setGlobalTimeOut(prev => _global_time_out);
        } else {
            findMovie('');
        }

    }

    return <>
        <div className="d-flex w-50  container-search">
            <input className="form-control input-search" type="search" placeholder={placeholder} aria-label="Search" onChange={(e) => handlerChangeFindMovie(e)} />
            <button className="btn btn-outline-success button-search" type="submit">Buscar</button>
        </div>
    </>
}

export default SearchBar;