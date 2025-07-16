import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NavLink from "./Navlink";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    setModalStyle(
      isMobile
        ? {
            top: "130px",
            left: "50%",
            transform: "translateX(-10%)",
            position: "absolute",
            // display: "none",
            // width: "55vw",
          }
        : {
            top: "150px",
            left: "600px",
            position: "absolute",
            width: "55vw",
          }
    );
  }, []);

  return (
    <div className="w-full bg-primaryColor px-4 py-2 h-20 flex justify-center items-center fixed top-0 left-0 right-0 z-50 shadow-md ">
      <div className="max-w-screen-xl mx-auto w-full flex justify-center items-center gap-4">
        <Logo />
        <SearchBar
          questions={[
            {
              title: "Where",
              detail: "Search Location",
            },
            {
              title: "How Much",
              detail: "Price Range",
            },
            {
              title: "Type",
              detail: "How many rooms?",
            },
          ]}
          onSearchClick={() => setIsModalOpen(true)}
          className={
            "w-full hidden md:inline-flex py-2 px-4 rounded-full shadow-md"
          }
          showMobile={false}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col  bg-white p-4 rounded-lg"
          style={modalStyle}
        >
          <button className="flex items-center gap-2 mb-4 font-josefin">
            <img src="/help-icon.svg" alt="" className="w-4 h-4" />
            <Link to={"/"} className="">
              Help Center
            </Link>
          </button>
          <button className="flex items-center gap-2 mb-4 font-josefin">
            <img src="/q&a-icon.svg" alt="" className="w-4 h-4" />
            <Link to={"/"} className="">
              Q & A
            </Link>
          </button>
          <button className="flex items-center gap-2 mb-4 font-josefin">
            <img src="/t&c-icon.svg" alt="" className="w-4 h-4" />
            <Link to={"/"} className="">
              Terms & Conditions
            </Link>
          </button>
          <button className="flex items-center gap-2 mb-4 font-josefin border-t border-t-gray-500 pt-2">
            <img src="/fi_search.svg" alt="" className="w-4 h-4" />
            <Link to={"/"} className="">
              Find a Landlord
            </Link>
          </button>
          <button className=" flex items-center gap-2 mb-4 font-josefin border-t border-t-gray-500 pt-2">
            <img src="/sign-icon.svg" alt="" className="w-4 h-4" />
            <Link to={"/sign-in"} className="">
              Sign In / Sign Up
            </Link>
          </button>
        </Modal>

        <NavLink />
      </div>
    </div>
  );
};

export default Header2;
