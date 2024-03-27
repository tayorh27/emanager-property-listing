import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import OurPartners from "./pages/OurPartners/OurPartners";
import Faqs from "./pages/Faqs/Faqs";
import Contact from "./pages/Contact/Contact";
import AppRoutes from "./DASHBOARD/Routes/DashBoardAppRoutes";
import ListAs from "./components/ListAs/ListAs";
import ListAsLandlord from "./components/ListAs/ListAsLandlord";
import ListAsAgent from "./components/ListAs/ListAsAgent";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home/Home";
import MainNav from "./components/MainNav";
import MainFooter from "./components/MainFooter";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isDashLayoutRoute = useLocation().pathname.startsWith("/dashlayout");

  return (
    <div className="App">
      <ScrollToTop />
      <main>
        {isDashLayoutRoute ? null : <MainNav/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashlayout/*" element={<AppRoutes />} />
          <Route path="/ourpartners" element={<OurPartners />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/list-as" element={<ListAs />} />
          <Route path="/list-as-landlord" element={<ListAsLandlord />} />
          <Route path="/list-as-agent" element={<ListAsAgent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {isDashLayoutRoute ? null : <MainFooter/>}
      </main>
    </div>
  );
}

export default App;
