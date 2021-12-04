import TitlePage from "./components/TitlePage";
import "./css/navbar.css";
import { TITLE_PAGE } from "../../utils/Config";
import SearchBar from "./components/SearchBar";
const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <TitlePage title={TITLE_PAGE} />
                <SearchBar placeholder="Buscar pelicula por nombre o género"/>
            </div>
        </nav>
    </>
}

export default Navbar;