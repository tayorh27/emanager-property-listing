//Import styles//
import styles from "../../styles/LandingP.module.css";
import about from "../../styles/About.module.css";
// import listing from "../../styles/Listing.module.css";
// import filter from "../../styles/ListFliter.module.css";

//Import assets//
import hq from "../../assets/img/testAssets/unsplash_4ojhpgKpS68.webp";

const About = () => {
  return (
    <div>
      <div id="about_hero_part">
        <section id="about_hero" className={about.list_hero}>
          <div className="mt-20">
            <h2 className={styles.h2}>Buy, Lease, Search with Ease</h2>
            <p className={styles.p}>
              Get access to the best property listing here!
            </p>
          </div>
        </section>
      </div>

      <span className="block w-[100%] text-center m-auto font-bold text-[#000] text-[35px] mt-10">
        About Us
      </span>

      <div id="about-us-desc-part" className={about.main_desc}>
        <p>
          E-Manager is Nigeria&lsquo;s leading online property listing platform.
          Our goal is to link our real estate agent and developer partners with
          Nigerian consumers looking to buy or rent residential and commercial
          property. Our mission is to provide potential tenants and house
          hunters with an efficient and affordable method of locating the ideal
          property that meets their requirements and tastes.
        </p>
      </div>

      <div id="list_options_part">
        <div className={about.options_row}>
          <div className={about.options_col}>
            <div className={about.options_info}>
              <h2 className={about.h3}>Our Mission</h2>
              <p>
                E-Manager is Nigeria&lsquo;s leading online property listing platform.
                Our goal is to link our real estate agent and developer partners
                with Nigerian consumers looking to buy or rent residential and
                commercial property. <br /> <br /> Our mission is to provide potential tenants
                and house hunters with an efficient and affordable method of
                locating the ideal property that meets their requirements and
                tastes.
              </p>
            </div>
          </div>
          <div className={about.options_col}>
            <div className={about.options_info}>
              <img src={hq} alt="hq-building" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
