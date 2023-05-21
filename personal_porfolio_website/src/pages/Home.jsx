import React from "react";
import styles from "../style";

import {
  HomeHero,
  Stats,
  HomeAbout,
  HomeProjects,
  HomeServices,
  Testimonials,
  Clients,
  ReachMe,
} from "../components";

const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HomeHero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <HomeAbout />
          <HomeProjects />
          <HomeServices />
          <Testimonials />
          <Clients />
          <ReachMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
