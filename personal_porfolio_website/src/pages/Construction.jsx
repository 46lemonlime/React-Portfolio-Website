import React from "react";
import styles, { layout } from "../style";
import { WIP } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Construction = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] -right-40 top-1/2 rounded-full red__gradient" />
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
              Coming Soon!
            </h1>
            <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
              WE ARE WORKING HARD TO GIVE YOU A BETTER EXPERIENCE.
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Get Ready for Something Big!
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] `}>
              We're in the process of updating our website & the page will go
              live any time soon. To stay informed, sign up for our email
              updates or follow us on social media. Thank you for your patience
              and support!
            </p>
            <Link to="/">
              <Button styles={`mt-10`} children={"Back Home"} />
            </Link>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              src={WIP}
              alt="WIP"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Construction;
