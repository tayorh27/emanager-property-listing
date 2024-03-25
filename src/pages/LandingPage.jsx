import MainNav from "../components/MainNav";

// Import styles
import styles from "../styles/LandingP.module.css";

const LandingPage = () => {
  return (
    <div>
      <MainNav />

      <div id="hero_part">
        <section id="hero" className={styles.hero}>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
