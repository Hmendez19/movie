import "./css/navbar.css";
import TitlePage from "./components/TitlePage";
import { TITLE_PAGE } from "../../utils/Config";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <TitlePage title={TITLE_PAGE} />
                <Menu/>
                <SearchBar placeholder="Buscar pelicula por nombre o género"/>
            </div>
        </nav>
    </>
}

export default Navbar;