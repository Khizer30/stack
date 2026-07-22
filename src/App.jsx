import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ClickSpark from "./components/ClickSpark";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </ClickSpark>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
