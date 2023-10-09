import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/headers/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreens from "./screens/homeScreens/HomeScreens";
import './Variable.css';
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false)
  const handleToggle = () => {
    setSidebar(preval => !preval);
  }
  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app_container d-flex flex-row">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <Container className="app__main">
          <HomeScreens />
        </Container>
      </div>
    </>
  );
}

export default App;
