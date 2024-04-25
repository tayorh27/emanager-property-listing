import { useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate, useNavigate} from "react-router-dom";
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
import SearchFilteredProperties from './pages/SearchFilter/SearchFilteredProperties'
import ReusableModal from "./UI/ReusableModal/ReusableModal";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isDashLayoutRoute = useLocation().pathname.startsWith("/dashlayout") || useLocation().pathname === '/404'
  const isLandingPage = useLocation().pathname === '/'
  const navigate = useNavigate()
  const [openSignup, setOpenSignup] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)

  const clickCreateAccount = () => {
    if(!isLandingPage){
      navigate('/')
      setOpenSignup(true)
    } else {
      setOpenSignup(true)
    }
  }

  const clickFilter = () => {
    if(!isLandingPage){
      navigate('/')
      setOpenFilter(true)
    }
    setOpenFilter(true)
  }

  const closeModal = () => {
    if(openSignup){
      setOpenSignup((prev) => !prev)
      console.log("create account closed")
    } else if(openFilter){
      setOpenFilter((prev) => !prev)
      console.log("filter modal closed")
    }
  }

  return (
    <div className="App">
      <ScrollToTop />
      <main>
        {isDashLayoutRoute ? null : <MainNav SignUpModal={clickCreateAccount}/>}
        <Routes>
          <Route path="/" element={<LandingPage
           openSignup={openSignup} openFilter={openFilter} closeModal={closeModal}
           filterModal={clickFilter}
           />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashlayout/*" element={<AppRoutes />} />
          <Route path="/ourpartners" element={<OurPartners />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/list-as" element={<ListAs />} />
          <Route path="/list-as-landlord" element={<ListAsLandlord />} />
          <Route path="/search-filter" element={<SearchFilteredProperties filterModal={clickFilter}/>}/>
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
