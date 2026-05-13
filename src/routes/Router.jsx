import { Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home/Home.jsx";
import PropertyDetail from "../pages/PropertyDetail/PropertyDetail.jsx";

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </>
  );
};

export default Router;