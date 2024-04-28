import MainNav from "../MainNav";

//Import styles//
import styles from "../../styles/LandingP.module.css";
import listing from "../../styles/Listing.module.css";
import filter from "../../styles/ListFliter.module.css";

const ListAsLandlord = () => {
  return (
    <div>
      <MainNav />

      <div id="shop_hero_part">
        <section id="shop_hero" className={listing.list_hero}>
          <div className=" mt-20">
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
              <button
                type="button"
                className={`${styles.btn_normal} ${filter.activeButton}`}
              >
                Media
              </button>
              <button
                type="button"
                className={`${styles.btn_normal} ${filter.activeButton}`}
              >
                Location
              </button>
              <button
                type="button"
                className={`${styles.btn_normal} ${filter.activeButton}`}
              >
                Details
              </button>
              <button
                type="button"
                className={`${styles.btn_normal} ${filter.activeButton}`}
              >
                Amenities
              </button>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default ListAsLandlord;
