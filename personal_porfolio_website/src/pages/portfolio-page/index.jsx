import React from "react";
import styles, { layout } from "../../style";
import { project00 } from "../../assets";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { projects } from "../../constants";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            // gradient
            <div className="absolute z-[0] w-[40%] h-[40%] right-10 top-1/2 rounded-full red__gradient" />
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
              Projects
            </h1>
            <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
              WELCOME TO MY PROJECTS PAGE!
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Here you'll find a collection of my latest and most exciting
              projects.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              Each project showcases my skills, creativity, and problem-solving
              abilities. Feel free to browse through the collection and click on
              each project to explore its unique details
            </p>
            <Link to="/">
              <Button children={"Back Home"} />
            </Link>
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
