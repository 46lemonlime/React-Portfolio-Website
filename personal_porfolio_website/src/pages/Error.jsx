import React from "react";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}
          >
            <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              404
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              page not found
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

export default Error;
