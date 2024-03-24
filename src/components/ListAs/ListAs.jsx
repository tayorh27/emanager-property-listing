import MainNav from "../MainNav";

//Import styles//
import styles from "../../styles/LandingP.module.css";
import listing from "../../styles/Listing.module.css";

const ListAs = () => {
  return (
    <div>
      <MainNav />

      <div id="shop_hero_part">
        <section id="shop_hero" className={listing.list_hero}>
          <h2 className={styles.h2}>
            Get the right tenants for your Properties here
          </h2>
          <p className={styles.p}>List your properties here!</p>
        </section>
      </div>
    </div>
  );
};

export default ListAs;
