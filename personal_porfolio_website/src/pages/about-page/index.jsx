import React from "react";

// import styles
import styles, { layout } from "../../style";

// import specific components
import AboutIntro from "./components/AboutIntro";
import AboutFeature from "./components/AboutFeature";

const About = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} `}
        >
          <AboutIntro />
        </section>
      </div>
    </div>
  );
};

export default About;
