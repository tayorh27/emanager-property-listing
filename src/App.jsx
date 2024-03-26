import { useEffect } from "react";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const {pathname} = useLocation()
  const isDashboardRoute = pathname.startsWith("/dashlayout");

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
      <div>
        {isDashboardRoute ? null : <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashlayout/*" element={<AppRoutes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {isDashboardRoute ? null : <Footer/>}
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
