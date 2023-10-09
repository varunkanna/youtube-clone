import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/headers/Header";
import Sidebar from "./components/sidebar/sidebar";
import HomeScreens from "./screens/homeScreens/HomeScreens";
import './Variable.css';

function App() {
  return (
    <>
      <Header />
      <div className="app_container border border-info ">
        <Sidebar />
        <Container className="app__main">
          <HomeScreens />
        </Container>
      </div>
    </>
  );
}

export default App;
