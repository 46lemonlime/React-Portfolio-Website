import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="hoobank" className="w-[120px] h-[40px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link
            to={nav.link}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white relative ${
              index === navLinks.length ? "mr-0" : "mr-10"
            }`}
          >
            <a className="navLink" href={`/#${nav.link}`}>
              {nav.title}
            </a>
          </Link>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <Link
                to={nav.link}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.link}`}>{nav.title}</a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
