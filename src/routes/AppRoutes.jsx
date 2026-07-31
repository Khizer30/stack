import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Founders from "../pages/Founders";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Training from "../pages/Training";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/founders" element={<Founders />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
};

export default AppRoutes;
