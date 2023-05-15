import { apple, card, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          My latest work <br className="sm:block hidden" /> and completed
          projects.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          In this section, you will find a comprehensive collection of my latest
          completed projects, showcasing my skills and expertise in various
          areas of interest.
        </p>
        <Link to="/Construction">
          <Button styles={`mt-10`} children={"Get Projects"} />
        </Link>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
