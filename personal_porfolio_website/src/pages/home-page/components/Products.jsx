// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../../style";

// import images
import { bill } from "../../../assets";

// import global components
import Button from "../../../components/Button";

const Products = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Services & Pricing: <br className="sm:block hidden" /> Affordable
          Solutions for Your Business Needs.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Whether you're looking for custom software solutions, modern website
          design, or expert customer service, my pricing is transparent and
          competitive. You will get the best possible value for your investment.
        </p>
        <Link to="/Services">
          <Button styles="mt-10" children={"Get Started"} />
        </Link>
      </div>
      <div className={layout.sectionImg}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%]" />
        <div className="absolute z-[3] -right-1/4 top-0 w-[60%] h-[60%] rounded-full white__gradient" />
        <div className="absolute z-[0] -right-1/4 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient" />
      </div>
    </section>
  );
};

export default Products;
