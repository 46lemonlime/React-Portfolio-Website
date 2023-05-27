import React from "react";

// import styles
import styles from "../../style";

// import components
import {
  HomeHero,
  HomeProjects,
  HomeServices,
  ReachMe,
} from "../../components";

const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HomeHero />
          <HomeProjects />
          <HomeServices />
          <ReachMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
