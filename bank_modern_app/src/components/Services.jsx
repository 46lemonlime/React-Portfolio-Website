import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => {
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
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
        <div className="absolute z-[3] -right-1/4 top-0 w-[60%] h-[60%] rounded-full white__gradient" />
        <div className="absolute z-[0] -right-1/4 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient" />
      </div>
    </section>
  );
};

export default Services;
