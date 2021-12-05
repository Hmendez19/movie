import CardContainer from "./modules/Cards/CardContainer";
import MainContainer from "./modules/Main/MainContainer";
import Navbar from "./modules/Navbar/Navbar";
import SubTitle from "./modules/SubTitle/SubTitle";
import useFetch from "./hook/useFetch";
import Loader from "./modules/Loader/Loader";
function App() {
  const [data, isLoader, setQuery] = useFetch();
  return <>
    <Navbar />
    <MainContainer>
      {
        isLoader ? <Loader /> : <> <SubTitle /> <CardContainer /> </>
      }
    </MainContainer>
  </>;
}

export default App;
