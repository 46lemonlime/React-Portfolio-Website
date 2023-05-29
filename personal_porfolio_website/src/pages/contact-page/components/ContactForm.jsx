import React from "react";

// import styles
import styles from "../../../style";

// import components
import Button from "../../../components/Button";

const ContactForm = () => {
  return (
    <form>
      <div
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mb-4">
            Contact <span>Form</span>
          </h1>
          <input
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="text"
            name="name"
            id=""
            placeholder="Enter name..."
          />
          <input
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="email"
            name="email"
            id=""
            placeholder="Enter email address..."
          />
          <input
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="phone"
            name="phone"
            id=""
            placeholder="Enter phone number..."
          />
          <input
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="subject"
            name="subject"
            id=""
            placeholder="Enter subject..."
          />
          <textarea
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            name="message"
            id=""
            rows="10"
            placeholder="Type here..."
          ></textarea>
          <div>
            <Button styles={`sm:mt-10 xs:my-10 `} children={"Send message"} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
