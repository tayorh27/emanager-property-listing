import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Faqs from "./pages/LandingPage/Faqs/Faqs";
import OurPartners from "./pages/OurPartners/OurPartners";
import Contact from "./pages/Contact/Contact";
import AppRoutes from "./DASHBOARD/Routes/DashBoardAppRoutes";
import ListAs from "./components/ListAs/ListAs";
import ListAsLandlord from "./components/ListAs/ListAsLandlord";
import ListAsAgent from "./components/ListAs/ListAsAgent";
import PageNotFound from "./pages/PageNotFound";
import MainNav from "./components/MainNav";
import MainFooter from "./components/Footer/MainFooter";
import LandingPage from "./pages/LandingPage/LandingPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isDashLayoutRoute = useLocation().pathname.startsWith("/dashlayout") || useLocation().pathname === '/404'

  return (
    <div className="App">
      <ScrollToTop />
      <main>
        {isDashLayoutRoute ? null : <MainNav/>}
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashlayout/*" element={<AppRoutes />} />
          <Route path="/ourpartners" element={<OurPartners />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/list-as" element={<ListAs />} />
          <Route path="/list-as-landlord" element={<ListAsLandlord />} />
          <Route path="/list-as-agent" element={<ListAsAgent />} />
          <Route path="*" element={<Navigate replace to="/404" />}/>
          <Route path="/404" element={<PageNotFound/>} />
        </Routes>
        {isDashLayoutRoute ? null : <MainFooter/>}
      </main>
    </div>
  );
}

export default App;
