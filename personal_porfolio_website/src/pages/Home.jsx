import React from "react";
import styles from "../style";

import {
  Hero,
  Stats,
  About,
  Portfolio,
  Products,
  Testimonials,
  Clients,
  ReachMe,
} from "../components";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Portfolio />
          <Products />
          <Testimonials />
          <Clients />
          <ReachMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
