import { useEffect, useState } from "react";
import { API_MOVIE,ERROR_MESSAGE } from "../utils/Config";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [query,setQuery]=useState('');

    useEffect(() => {
        fetchData(query);
    }, [query]);


    const fetchData = async (_query) => {
        try {
            setIsLoader(true);
            const response = await fetch(`${API_MOVIE}?s=${_query}`);
            if (!response.ok) {
                setData([]);
            }
            const { results } = await response.json();
            setData(results);
        } catch (error) {
            alert(ERROR_MESSAGE);
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    };

    return [data, isLoader,setQuery];
}

export default useFetch;