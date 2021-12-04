import CardContainer from "./modules/Cards/CardContainer";
import MainContainer from "./modules/Main/MainContainer";
import Navbar from "./modules/Navbar/Navbar";

function App() {
  return <>
    <Navbar />
    <MainContainer>
      <CardContainer />
    </MainContainer>
  </>;
}

export default App;
