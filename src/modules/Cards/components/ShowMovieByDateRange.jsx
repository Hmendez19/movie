import CardItem from "./CardItem";

const ShowMovieByDateRange = (props) => {
    const { dataDateRange} = props;

    //Mostrar todas las peliculas filtradas por rango de fechas
    return dataDateRange.length>0 && dataDateRange.map((item, index) => (<CardItem key={index} item={item} />))
}

export default ShowMovieByDateRange;