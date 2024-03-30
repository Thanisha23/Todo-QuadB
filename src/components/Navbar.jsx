import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../pages/HomeComponent.css";
/* eslint-disable react/prop-types */
const Navbar = ({ selection }) => {
  const navItems = ["", "Home", "About", "Pricing", "Contact"];
  const [showMenu, setShowMenu] = useState(false);
  const classExtra = selection ? "blur" : "";

  const toggleMenu = () => setShowMenu((prevState) => !prevState);
  const handleClose = () => setShowMenu(false);
  const inProgress = () => alert("Dark Mode feature will be added soon!");

  return (
    <div className={`container mx-auto bg-gray-50 ${classExtra} z-50`}>
      {showMenu && <div className="overlay" onClick={handleClose} />}
      <div className="flex justify-between items-center h-[4rem] px-4 md:px-20">
        <div className="m-5">
          <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul
            className={`${
              showMenu ? "block" : "hidden"
            } md:flex md:flex-row flex-column justify-center items-center space-x-5 font-sans font-medium mx-[0.1rem] text-lg bg-gray-200 md:bg-gray-50 rounded-md p-3 md:p-0 absolute md:static top-[6rem] md:top-auto md:left-auto z-50 transition-colors duration-1000`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="mx-2 px-4 cursor-pointer m-[1rem] hover:text-gray-500 transition-colors duration-500 hover:rounded-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-10" onClick={inProgress}>
          <span className="material-symbols-outlined cursor-pointer dark-mode">
            dark_mode
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
