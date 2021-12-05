import CardContainer from "./modules/Cards/CardContainer";
import MainContainer from "./modules/Main/MainContainer";
import Navbar from "./modules/Navbar/Navbar";
import useFetch from "./hook/useFetch";
import Loader from "./modules/Loader/Loader";
function App() {
  const [data, isLoader, setQuery] = useFetch();
  return <>
    <Navbar />
    <MainContainer>
      {
        isLoader ? <Loader /> : <> <CardContainer /> </>
      }
    </MainContainer>
  </>;
}

export default App;
