import React from "react";

// import styles
import styles from "../../style";

// import specific components
import { Hero, Projects, Products, GetInToach } from "./components";

const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Projects />
          <Products />
          <GetInToach />
        </div>
      </div>
    </div>
  );
};

export default Home;
