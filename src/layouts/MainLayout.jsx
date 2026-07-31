import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
