import React from "react";
import { useState } from "react";

// import styles
import styles from "../../../style";

// import components
import Button from "../../../components/Button";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div>
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2} mb-4`}>Contact Form</h2>
          <input
            onChange={handleChange}
            value={data.name}
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="text"
            name="name"
            id=""
            placeholder="Enter name..."
          />
          <input
            onChange={handleChange}
            value={data.email}
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="email"
            name="email"
            id=""
            placeholder="Enter email address..."
          />
          <input
            onChange={handleChange}
            value={data.phone}
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="phone"
            name="phone"
            id=""
            placeholder="Enter phone number..."
          />
          <input
            onChange={handleChange}
            value={data.subject}
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            type="subject"
            name="subject"
            id=""
            placeholder="Enter subject..."
          />
          <textarea
            onChange={handleChange}
            value={data.message}
            className="bg-primary rounded-[20px] my-2 px-2 py-1 text-dimWhite"
            name="message"
            id=""
            rows="10"
            placeholder="Type here..."
          ></textarea>
          <div>
            <Button type="submit" styles={`mt-10`} children={"Send message"} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
