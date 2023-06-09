// import style
import styles, { layout } from "../../../style";

// import routing
import { Link } from "react-router-dom";

// import animations
import { TypeAnimation } from "react-type-animation";

// import images
import { discount, me } from "../../../assets";

// import global components
import Button from "../../../components/Button";

// import specific components
import Stats from "./Stats";
import GetCV from "./GetCV";

const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.section}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 opacity-100">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              Currently <span className="text-white">Open</span> for{" "}
              <span className="text-white">Full-Remote</span> Job Opportunities
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className={styles.display}>
              Jeison <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Porfirio</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetCV />
            </div>
          </div>

          <h1 className={styles.display}>Plaza Sanchez</h1>
          <TypeAnimation
            sequence={[
              "Software Developer",
              2500,
              "Poker Player",
              2500,
              "Customer Service Agent",
              2500,
              "Poker Coach",
              2500,
            ]}
            speed={50}
            className="font-poppins font-semibold text-[18px] leading-[32px] bg-secondary-gradient rounded-[10px] px-[10px]"
            wrapper="div"
            repeat={Infinity}
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Hi, I'm Jeison Sanchez, <span className="text-white">👋</span>
            <br />
            Passionated about technology and computer science. I love optimising
            systems, solving problems and creating applications. Welcome to my
            website!
          </p>

          <Link to="/About">
            <Button children={"About Me"} styles={`mt-10`} />
          </Link>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
        >
          <img
            src={me}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] rounded-full"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-1/2 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] top-1/2 red__gradient" />
          {/* gradient end */}
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetCV />
        </div>
      </section>
      <Stats />
    </div>
  );
};

export default Hero;
