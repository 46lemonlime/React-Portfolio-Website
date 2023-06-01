import React from "react";

// import routing
import { Link } from "react-router-dom";

// import styles
import styles, { layout } from "../../style";

// import images
import { chat } from "../../assets";

// import components
import Button from "../../components/Button";

// import specific components
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex md:flex-row flex-col ${styles.paddingY} ${layout.sectionReverse} sm:mt-40`}
        >
          <div>
            <div className="absolute z-[0] w-[40%] h-[40%] right-20 top-1/2 rounded-full red__gradient" />
            <h1 className={`${styles.heading1} mt-10`}>Contact Me</h1>
            <p className={`${styles.subheading} my-5`}>
              dont hesitate, get in toach!
            </p>
            <h4 className={`${styles.heading4}`}>
              I am excited to connect with you!
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] `}>
              Reach out for questions, collaborations or to say hello. Contact
              me using the provided details or the convenient form. I'm eager to
              discuss potential projects, consultations, and more. Your message
              is important, and I'll respond promptly. Let's connect and explore
              the possibilities together!
            </p>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} ${styles.padding} md:my-0 my-10 relative`}
          >
            <img
              loading="lazy"
              src={chat}
              alt="chat"
              className="w-[100%] h-[100%] relative z-[5]"
            />
          </div>
        </section>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
