import { Link } from "react-router-dom";

const ServicesCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 service-card">
      <div className="flex flex-row justify-center">
        <img
          loading="lazy"
          src={img}
          alt={name}
          className="w-[96px] h-[96px]"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col mt-10">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white mt-2 mb-8 text-start">
        {content}
      </p>
      <Link
        to="/Construction"
        className="text-center font-poppins font-normal text-[16px] leading-[24px] text-secondary"
      >
        See more
      </Link>
    </div>
  );
};

export default ServicesCard;
