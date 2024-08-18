import FeatureCards from "./components/FeatureCards";
import HeaderPage from "./components/HeaderPage";
import Nav from "./components/Nav";
import PlanCards from "./components/PlanCards";
import Qna from "./components/Qna";
import Table from "./components/Table";
import Trial from "./components/Trial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Nav />
        <HeaderPage />
        <PlanCards />
        <FeatureCards />
        <Table />
        <Qna />
        <Trial />
        <Footer />
      </div>
    </>
  );
}

export default App;
