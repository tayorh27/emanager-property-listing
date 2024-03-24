import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import OurPartners from "./pages/OurPartners";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import AppRoutes from "./DASHBOARD/Routes/DashBoardAppRoutes";
import ListAs from "./components/ListAs/ListAs";
import PageNotFound from "./pages/PageNotFound";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashlayout/*" element={<AppRoutes />} />
          <Route path="/ourpartners" element={<OurPartners />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/list-as" element={<ListAs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
