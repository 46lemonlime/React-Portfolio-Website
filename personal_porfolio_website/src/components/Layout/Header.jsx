import React from "react";

// import styles
import styles from "../../style";

// import components
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
