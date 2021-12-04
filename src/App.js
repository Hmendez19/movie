import CardContainer from "./modules/Cards/CardContainer";
import MainContainer from "./modules/Main/MainContainer";
import Navbar from "./modules/Navbar/Navbar";
import SubTitle from "./modules/SubTitle/SubTitle";
import useFetch from "./hook/useFetch";
function App() {
   const [data, isLoader,setQuery]=useFetch();
 return <>
    <Navbar />
    <MainContainer>
      <SubTitle />
      <CardContainer />
    </MainContainer>
  </>;
}

export default App;
