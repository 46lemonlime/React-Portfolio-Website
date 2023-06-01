import React from "react";

// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../style";

// import images
import { calltracker } from "../../assets";

// import global componentss
import { Button } from "../../components";

// import specific components

const index = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
            <h1 className={`${styles.heading1} mt-10`}>
              Call Progress Tracker
            </h1>
            <p className={` ${styles.subheading} my-5`}>
              Boosting Customer Service!
            </p>
            <h4 className={styles.heading4}>VBA Personal project</h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              Welcome to the Call Progress Tracker page! As a former customer
              service agent, I discovered the crucial importance of empowering
              agents with the right tools to deliver exceptional customer
              service. Developed during my time in a call center, this app
              revolutionized my performance and many other agents who struggled
              with their KPI's.
            </p>
            <Link to={"/projects"}>
              <Button children={"All Projects"} />
            </Link>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              src={calltracker}
              alt="calltracker"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default index;
