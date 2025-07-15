import React from "react";
import Logo from "./Logo";
import NavLink from "./Navlink";

const Header = () => {
  return (
    <div className="bg-primaryColor px-4 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md h-20">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center gap-4">
        <Logo />
        <NavLink />
      </div>
    </div>
  );
};

export default Header;
