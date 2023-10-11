import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/headers/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreens from "./screens/homeScreens/HomeScreens";
import "./Variable.css";
import { useState } from "react";
import LoginScreens from "./screens/loginScreens/LoginScreens";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleToggle = () => {
    setSidebar((preval) => !preval);
  };
  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app_container d-flex flex-row">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <Container fluid className="app__main">
          {/* <HomeScreens /> */}
          {children}
        </Container>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomeScreens />
      </Layout>
    ),
  },
  {
    path: "/auth",
    element: <LoginScreens />,
  },
  {
    path: "/search",
    element: (
      <Layout>
        <div>"Search"</div>
      </Layout>
    ),
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
