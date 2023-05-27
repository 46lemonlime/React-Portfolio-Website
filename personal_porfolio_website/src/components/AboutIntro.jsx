import { features } from "../constants";
import styles, { layout } from "../style";
import GetRoadmap from "./GetRoadmap";
import Button from "./Button";
import { Link } from "react-router-dom";
import { aboutme } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        loading="lazy"
        src={icon}
        alt="star"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <section>
      <div className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
            About Me
          </h1>
          <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
            WELCOME TO MY ABOUT PAGE!
          </p>
          <div className="flex flex-row justify-between items-center w-full">
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              In this section, I invite you to explore my story, the passions,
              and experiences that have shaped me into the person I am today.
              Here you will get to know more about me and my journey as a
              professional in various domains.
            </p>
          </div>

          <Link to="/">
            <Button styles={`mt-10`} children={"Back Home"} />
          </Link>
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
