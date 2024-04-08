import { useEffect } from "react";
<<<<<<< HEAD
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
import MainFooter from "./components/MainFooter";
import LandingPage from "./pages/LandingPage/LandingPage";

=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Home from "./pages/Home/Home";
import Navbar from './Navbar/Navbar'
import PageNotFound from "./pages/PageNotFound";
<<<<<<< Updated upstream
=======
import AppRoutes from './DASHBOARD/Routes/DashBoardAppRoutes'
import Footer from "./Footer/Footer";
>>>>>>> Stashed changes
>>>>>>> main

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
<<<<<<< HEAD
  const isDashLayoutRoute = useLocation().pathname.startsWith("/dashlayout") || useLocation().pathname === '/404'
=======
  const {pathname} = useLocation()
  const isDashboardRoute = pathname.startsWith("/dashlayout");
>>>>>>> main

  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
=======
      <ScrollToTop />
<<<<<<< HEAD
      <main>
        {isDashLayoutRoute ? null : <MainNav/>}
        <Routes>
          <Route path="/" element={<LandingPage/>} />
=======
      <div>
        {isDashboardRoute ? null : <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
>>>>>>> main
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
<<<<<<< HEAD
        {isDashLayoutRoute ? null : <MainFooter/>}
      </main>
=======
        {isDashboardRoute ? null : <Footer/>}
      </div>
>>>>>>> Stashed changes
>>>>>>> main
    </div>
  );
}

export default App;
