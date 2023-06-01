// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../../style";

// import images
import { aboutme } from "../../../assets";

// import constants
import { features } from "../../../constants";

// import global components
import Button from "../../../components/Button";

// import specific components
import GetRoadmap from "../../../components/GetRoadmap";

import FeatureCard from "./FeatureCard";

const About = () => {
  return (
    <section>
      <div className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
          <h1 className={`${styles.heading1} mt-10`}>About Me</h1>
          <p className={`${styles.subheading} my-5`}>
            Welcome to my about page!
          </p>
          <div className="flex flex-row justify-between items-center w-full">
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              In this section, I invite you to explore my story, the passions,
              and experiences that have shaped me into the person I am today.
              Here you will get to know more about me and my journey as a
              professional in various domains.
            </p>
          </div>
        </div>
        <div className={layout.sectionImgReverse}>
          <img
            src={aboutme}
            alt="card"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </div>
      <section className={layout.sectionReverse}>
        <div className="absolute z-[0] w-[40%] h-[40%] left-20 top-2/2 rounded-full blue__gradient opacity-60" />
        <div className={`${layout.sectionImgReverse} flex-col `}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            My journey, <br className="sm:block hidden" /> progress and
            documentation.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Please find a link to my roadmap in Computer Science. Here you will
            find a notion document with courses, tutorials and certifications I
            have completed, as well as my current work in progress.
          </p>
          <GetRoadmap styles={`mt-10`} />
        </div>
      </section>
    </section>
  );
};

export default About;
