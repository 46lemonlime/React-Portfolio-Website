import React from "react";

// import routing
import { Link } from "react-router-dom";

// import style
import styles, { layout } from "../../style";

// import images
import { error_img } from "../../assets";

// import components
import Button from "../../components/Button";

const Error = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
            <h1 className={`${styles.heading1} mt-10`}>404 Not Found!</h1>
            <p className={`${styles.subheading} my-5`}>
              It looks like the page you're looking for doesn't exist or has
              been moved.
            </p>
            <h4 className={styles.heading4}>
              Oops! We couldn't find that page.
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              We're sorry for the inconvenience. If you continue to experience
              issues, please fill out our contact form and we'll get back to you
              as soon as possible. Thank you for your understanding.
            </p>
            <h4 className={styles.heading4}>
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
              src={error_img}
              alt="404 error"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Error;
