import "./css/main.css";
const MainContainer = ({children}) => {
    return <>
        <main className="container">
           {children}
        </main>
    </>
}

export default MainContainer;