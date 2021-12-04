const SearchBar = (props) => {
    const { placeholder } = props;
    return <>
        <div className="d-flex w-50">
            <input className="form-control input-search" type="search" placeholder={placeholder} aria-label="Search" />
            <button className="btn btn-outline-success button-search" type="submit">Buscar</button>
        </div>
    </>
}

export default SearchBar;