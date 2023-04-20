import React from "react";

import Navbar from "../Navbar";
import styles from "../../style";

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
