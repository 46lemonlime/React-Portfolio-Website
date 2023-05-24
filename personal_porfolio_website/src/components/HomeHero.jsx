import styles, { layout } from "../style";
import { discount, me } from "../assets";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import { TypeAnimation } from "react-type-animation";
import GetCV from "./GetCV";

const HomeHero = () => {
  return (
    <div>
      <section
        id="hero"
        className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.section}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              Currently <span className="text-white">Open</span> for{" "}
              <span className="text-white">Full-Remote</span> Job Opportunities
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Jeison <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Porfirio</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetCV />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Plaza Sanchez
          </h1>
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Poker Player",
              2000,
              "Customer Service Agent",
              2000,
              "Poker Coach",
              2000,
            ]}
            speed={50}
            className="font-poppins font-semibold text-[18px] leading-[32px] text-secondary"
            wrapper="div"
            repeat={Infinity}
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Hi, I'm Jeison Sanchez, 👋
            <br />
            Passionated about technology and computer science. I love optimising
            systems, solving problems and creating applications. Welcome to my
            website!
          </p>

          <Link to="/AboutMe">
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

export default HomeHero;
