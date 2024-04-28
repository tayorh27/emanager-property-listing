// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import MainNav from "../MainNav";
// import logo from "../../assets/img/testAssets/Vector.webp";
// import { TiSocialTwitter } from "react-icons/ti";
// import { BiLogoInstagram } from "react-icons/bi";
// import { TiSocialFacebook } from "react-icons/ti";
// import { FaLinkedinIn } from "react-icons/fa";

//Import styles//
import styles from "../../styles/LandingP.module.css";
import listing from "../../styles/Listing.module.css";
import filter from "../../styles/ListFliter.module.css";

//Import assets//
import landlord from "../../assets/img/testAssets/Frame 1618868338.webp";
import agent from "../../assets/img/testAssets/Frame 465.webp";
import lawyer from "../../assets/img/testAssets/Frame 1618868338.webp";

const ListAs = () => {
  const navigate = useNavigate();

  const goToListAsLandlord = () => navigate("/list-as-landlord");
  const goToListAsAgent = () => navigate("/list-as-agent");

  return (
    <div>
      <div id="shop_hero_part">
        <section id="shop_hero" className={listing.list_hero}>
          <div className="mt-20">
            <h2 className={styles.h2}>
              Get the right tenants for your Properties here
            </h2>
            <p className={styles.p}>List your properties here!</p>
          </div>
        </section>
      </div>

      <span className="block w-[100%] text-center m-auto font-bold text-gray-600 text-[25px] mt-4">
        List your Property
      </span>

      <div id="filter_part">
        <div className={filter.contain}>
          <div className={filter.cat_head}>
            <div className=" bg-gray-100 h-fit">
              <button
                type="button"
                className={`${styles.btn_normal} ${filter.activeButton}`}
              >
                Description
              </button>
              <button type="button" className={`${styles.btn_normal}`}>
                Media
              </button>
              <button type="button" className={`${styles.btn_normal}`}>
                Location
              </button>
              <button type="button" className={`${styles.btn_normal} `}>
                Details
              </button>
              <button type="button" className={`${styles.btn_normal}`}>
                Amenities
              </button>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>

      <span className="block w-[100%] text-center m-auto font-bold text-gray-600 text-[20px] mt-10">
        Hello Precious
      </span>

      <div id="list_options_part">
        <div className={listing.options_row}>
          <div className={listing.options_col}>
            <div className={listing.options_info}>
              <img src={landlord} alt="landlord/developer" />
              <h3 className={listing.h3}>Landlord/Developer</h3>
              <p>
                Enjoy enhanced visibility and efficiency when you list as a
                landlord on our platform
              </p>
              <button
                className={styles.btn_normal}
                onClick={goToListAsLandlord}
              >
                List as LandLord
              </button>
            </div>
          </div>
          <div className={listing.options_col}>
            <div className={listing.options_info}>
              <img src={agent} alt="landlord/developer" />
              <h3 className={listing.h3}>Agent</h3>
              <p>
                Enjoy enhanced visibility and efficiency when you list as an
                agent on our platform
              </p>
              <button className={styles.btn_normal} onClick={goToListAsAgent}>
                List as Agent
              </button>
            </div>
          </div>
          <div className={listing.options_col}>
            <div className={listing.options_info}>
              <img src={lawyer} alt="landlord/developer" />
              <h3 className={listing.h3}>Real Estate Lawyer</h3>
              <p>
                Enjoy enhanced visibility and efficiency when you list as a
                lawyer on our platform
              </p>
              <button className={`${styles.btn_normal} ${listing.btn_cos}`}>
                Coming Soon...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="listas_footer_part">
        <div className={listing.footer}>
          <div className={listing.footer_logo}>
            <div className={` ${listing.logo}`}>
              <Link to="/" className={styles.logoLink}>
                <img src={logo} alt="logo" />
              </Link>
              <span className={listing.logoText}>E MANAGER</span>
            </div>
          </div>
          <div className={listing.footer_navigation}>
            <div>
              <ul id="navbar" className={listing.navbar}>
                <li id="active">
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={listing.copy_links}>
            <div className={listing.copyrights}>
              &#169; 2023 E-Manager. All rights reserved.
            </div>

            <div className={listing.links}>
              <div className={listing.link}>
                <TiSocialTwitter />
              </div>
              <div className={listing.link}>
                <BiLogoInstagram />
              </div>
              <div className={listing.link}>
                <TiSocialFacebook />
              </div>
              <div className={listing.link}>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ListAs;
