// import routing
import { Link } from "react-router-dom";

// import styles
import styles from "../../../style";

// import global components
import Button from "../../../components/Button";

const GetInToach = () => {
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get in toach!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Looking forward to potential collaborations, so please don't hesitate
          to reach me out and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="/Contact">
          <Button children={"Contact Me"} />
        </Link>
      </div>
    </section>
  );
};

export default GetInToach;
