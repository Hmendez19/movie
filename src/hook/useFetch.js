import { useEffect, useState } from "react";
import { API_MOVIE, ERROR_MESSAGE, MAX_NUMBER_CARDS } from "../utils/Config";
import Swal from 'sweetalert2';
import { useMovieStore } from "../store/store";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [query, setQuery] = useState('');
    const addMovie = useMovieStore((state) => state.addMovie);

    useEffect(() => {
        fetchData(query);
    }, [query]);


    const fetchData = async (_query = '') => {
        try {
            setIsLoader(true);
            const response = await fetch(`${API_MOVIE}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            (!response.ok) && setDataStore();
            let jsonData = await response.json();
            setDataStore(jsonData);
        } catch (error) {
            Swal.fire({
                title: ERROR_MESSAGE,
                text: '',
                icon: 'error',
                showConfirmButton: false,
                timer: 3500
            });
            setDataStore();
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    };

    const setDataStore = (_data = []) => {
        addMovie(_data);
        setData(_data);
    }

    return [data, isLoader, setQuery];
}

export default useFetch;