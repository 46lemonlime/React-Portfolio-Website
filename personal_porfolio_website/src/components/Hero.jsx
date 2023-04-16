import styles from "../style";
import { discount, robot, me } from "../assets";
import GetCV from "./GetCV";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
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
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Hi, I'm Jeison Sanchez, 👋
          <br />
          Spanish native currently living in the UK. Passionated about
          technology and computer science. I love optimising systems, solving
          problems and creating applications. Welcome to my website!
        </p>
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
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetCV />
      </div>
    </section>
  );
};

export default Hero;
