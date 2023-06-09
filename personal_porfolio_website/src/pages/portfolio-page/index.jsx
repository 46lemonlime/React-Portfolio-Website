import React from "react";

// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../style";

// import images
import { project00 } from "../../assets";

// import components
import Button from "../../components/Button";
import ProjectCard from "./components/ProjectCard";

// import constants
import { projects } from "../../constants";

const Projects = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] right-10 top-1/2 rounded-full red__gradient" />
            <h1 className={` ${styles.heading1} mt-10`}>Projects</h1>
            <p className={` ${styles.subheading} my-5`}>
              welcome to my projects page!
            </p>
            <h4 className={styles.heading4}>
              Here you'll find a collection of my latest and most exciting
              projects.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              Each project showcases my skills, creativity, and problem-solving
              abilities. Feel free to browse through the collection and click on
              each project to explore its unique details
            </p>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              src={project00}
              alt="project00"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
        <section className={` ${styles.paddingY}`}>
          <div className="flex flex-wrap sm:justify-start justify-center relative z-[1]">
            {projects.map((card) => (
              <ProjectCard key={card.id} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
