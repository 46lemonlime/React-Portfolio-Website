import React from "react";
import styles, { layout } from "../../style";
import About from "../../components/About";

const AboutMe = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <About />
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
