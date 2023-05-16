import React from "react";
import styles, { layout } from "../style";
import { service00 } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { services } from "../constants";
import ServicesCard from "../components/ProjectCard";

const Services = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] -right-40 top-1/2 rounded-full red__gradient" />
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
              Services
            </h1>
            <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
              WELCOME TO MY SERVICES PAGE!
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Here you'll find a collection of the products and services I
              provide.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              Here, I offer a range of professional services that leverage my
              skills, creativity, and problem-solving abilities. Whether you're
              looking for assistance with web development, UI/UX design, or
              digital marketing strategies, I bring a wealth of expertise to
              help you achieve your goals.
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Customer services and Poker 1 to 1 coaching.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              With more than 3 years of experience as a customer service agent
              and playing poker semi-profesionaly since 2019 I offer my services
              as a multilingual customer service agent and poker coach.
            </p>
            <Link to="/">
              <Button children={"Back Home"} />
            </Link>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              src={service00}
              alt="service00"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
        <div className="flex flex-wrap sm:justify-start justify-center relative z-[1]">
          {services.map((card) => (
            <ServicesCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
