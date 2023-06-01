import React from "react";

// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../style";

// import images
import { pokerdisplay } from "../../assets";

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
              Poker Strategy Display
            </h1>
            <p className={` ${styles.subheading} my-5`}>
              Enhancing Poker Strategy adherence!
            </p>
            <h4 className={styles.heading4}>VBA Personal project</h4>
            <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
              Welcome to the Poker Strat Display project! This innovative
              desktop application is designed to provide poker players with
              accurate adherence and optimal study of their customized poker
              strategy. With this tool, players can take their poker game to the
              next level and increase their chances of success.
            </p>
            <Link to={"/projects"}>
              <Button children={"All Projects"} />
            </Link>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              src={pokerdisplay}
              alt="pokerdisplay"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default index;
