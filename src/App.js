import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/headers/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreens from "./screens/homeScreens/HomeScreens";
import "./Variable.css";
import { useState, useEffect } from "react";
import LoginScreens from "./screens/loginScreens/LoginScreens";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  // side bar taggle
  const [sidebar, setSidebar] = useState(false);
  const handleToggle = () => {
    setSidebar((preval) => !preval);
  };

  // Auth Redirect
  const accessToken = useSelector((state) => state.auth.accessToken);
  const Loader = async () => {
    if (!accessToken) {
      navigate('/auth')
    }
    return null;
  };

  useEffect(() => {
    Loader();
  }, [accessToken])

  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app_container d-flex flex-row">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <Container className="app__main">
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
