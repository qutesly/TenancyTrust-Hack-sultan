import React from "react";

const NavLink = () => {
  return (
    <div className="w-full flex items-center justify-end gap-4">
      <button className="hidden md:inline-flex bg-white hover:bg-[#9747FF] hover:text-white rounded-full px-8 py-2 font-semibold font-josefin hoverEffect">
        A Landlord
      </button>
      <button className="bg-secondaryColor hover:bg-secondaryColor/50 rounded-full p-2 h-full">
        <img src="/Vector.svg" alt="Location" className="w-5 h-5" />
      </button>
      <button className="bg-secondaryColor hover:bg-secondaryColor/50 rounded-full p-2">
        <img src="/fi_menu.svg" alt="Location" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NavLink;
