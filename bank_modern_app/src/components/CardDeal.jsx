import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          porro quo exercitationem officia cumque dolore ipsa ab autem molestias
          consequatur.
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

export default CardDeal;
