import React from "react";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}
          >
            <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Coming Soon!
            </h2>
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
              WE ARE WORKING HARD TO GIVE YOU A BETTER EXPERIENCE.
            </p>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              We are working hard on it & the site may go live any time soon. To
              stay informed, sign up for our email updates or follow us on
              social media. Thank you for your patience!
            </p>
            <Link
              to="/"
              className={`${styles.paragraph} max-w-[470px] mt-5 text-secondary`}
            >
              back home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Construction;
