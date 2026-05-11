import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home/Home.jsx";

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;