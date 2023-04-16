import React from "react";

const Button = ({ styles, children }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-secondary-gradient rounded-[10px] outline-none ${styles} rounded-[10px]`}
  >
    {children}
  </button>
);

export default Button;
