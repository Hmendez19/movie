import { useMovieStore } from "../../../store/store";
import CardItem from "./CardItem";

const CardList = () => {
    const movies=useMovieStore((state)=>state.movies);
    return <>
        <div className="row row-cols-1 row-cols-md-4 mb-4 g-4">
            {
                movies.map(item=>(<CardItem key={item.image_url} item={item}/>))
            }
        </div>
    </>
}

export default CardList;