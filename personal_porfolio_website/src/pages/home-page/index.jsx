import React from "react";

// import styles
import styles from "../../style";

// import specific components
import { Hero, Projects, Products, GetInTouch } from "./components";

const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Projects />
          <Products />
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Home;
