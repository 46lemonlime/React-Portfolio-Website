import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} text-center flex-col relative`}
    >
      Testimonials
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/4 rounded-full red__gradient" />
      <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-10">
          Testimonials
        </h1>
        <h1
          className={`font-poppins font-semibold xs:text-[40px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center text-gradient`}
        >
          What people are saying about me
        </h1>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
