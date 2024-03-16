import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/testAssets/Vector.webp";
import { FaOutdent } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// Import styles
import styles from "../styles/LandingP.module.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div id="nav_part">
        <section id="Header" className={styles.header}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              <img src={logo} alt="logo" />
            </Link>
            <span className={styles.logoText}>E Manager</span>
            <div className={styles.arrows}>
              <div>
                <MdOutlineKeyboardArrowUp />
              </div>
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          </div>

          <div>
            <ul id="navbar" className={styles.navbar}>
              <li id="active" className={styles.active}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ourpartners">Our Partners</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className={styles.p_listing}>
                <Link to="/postlisting">Post a listing</Link>
              </li>
            </ul>
          </div>
          {/* Hamburger menu */}
          <div id="hamburger" className={styles.hamburger} onClick={toggleMenu}>
            {/* Hamburger icon */}
            <div className={styles.hamIcon}>
              {isMenuOpen ? (
                <RxCross2 icon="times" className={styles.hamIconClose} />
              ) : (
                <FaOutdent icon="outdent" className={styles.hamIconOpen} />
              )}
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
              <ul id="navbarT">
                <li>
                  <RxCross2 icon="times" className={styles.hamIcon2} />
                </li>
                <li className="activeT">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/ourpartners">Our Partners</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li className={styles.p_listing}>
                  <Link to="/postlisting">Post a listing</Link>
                </li>
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
