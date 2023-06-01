// import styles
import styles from "../../../style";

// import constants
import { stats } from "../../../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h3 className={styles.heading3}>{stat.value}</h3>
          <p className={`${styles.subheading} ml-3`}>{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
