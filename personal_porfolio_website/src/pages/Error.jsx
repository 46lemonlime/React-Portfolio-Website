import React from "react";
import styles, { layout } from "../style";
import { WIP } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Error = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] -right-40 top-1/2 rounded-full red__gradient" />
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
              404 Not Found!
            </h1>
            <p className="font-poppins font-semibold text-[18px] leading-[32px] text-gradient my-5">
              Oops! We couldn't find that page.
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              It looks like the page you're looking for doesn't exist or has
              been moved.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              We're sorry for the inconvenience. If you continue to experience
              issues, please fill out our contact form and we'll get back to you
              as soon as possible. Thank you for your understanding.
            </p>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Here are a few things you can try:
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] `}>
              - Double-check the URL for typos or errors. <br />
              - Use the search bar to find what you're looking for. <br />- Go
              back to our homepage and navigate from there.
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

export default Error;
