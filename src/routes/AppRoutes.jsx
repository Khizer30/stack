import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Founders from "../pages/Founders";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
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
