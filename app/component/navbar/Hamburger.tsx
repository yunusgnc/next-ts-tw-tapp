import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  return (
    <div className="relative cursor-pointer flex md:hidden">
      <GiHamburgerMenu size={25} className="text-3xl cursor-pointer" />
    </div>
  );
};

export default Hamburger;
