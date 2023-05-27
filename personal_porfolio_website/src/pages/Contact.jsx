import React from "react";
import styles, { layout } from "../style";
import { chat } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ReachMe } from "../components";

const Contact = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
              Contact Me
            </h1>
            <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
              DONT HESITATE, GET IN TOACH!
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              I am excited to connect with you!
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] `}>
              Reach out for questions, collaborations or to say hello. Contact
              me using the provided details or the convenient form. I'm eager to
              discuss potential projects, consultations, and more. Your message
              is important, and I'll respond promptly. Let's connect and explore
              the possibilities together!
            </p>
            <Link to="/">
              <Button styles={`mt-10`} children={"Back Home"} />
            </Link>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              loading="lazy"
              src={chat}
              alt="chat"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
        <ReachMe />
      </div>
    </div>
  );
};

export default Contact;
