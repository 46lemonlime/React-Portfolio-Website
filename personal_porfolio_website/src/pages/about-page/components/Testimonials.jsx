// import styles
import styles from "../../../style";

// import constants
import { feedback } from "../../../constants";

// import global components
import FeedbackCard from "../../../components/FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} text-center flex-col relative`}
    >
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/4 rounded-full red__gradient" />
      <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2}`}>Testimonials</h2>
        <h1 className={`${styles.heading3} text-gradient mt-5`}>
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
