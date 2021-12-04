const TitlePage = (props) => {
    const { title } = props;
    return <h1 className="navbar-brand" >{process.env.TITULO_PAGINA || title}</h1>
}

export default TitlePage;