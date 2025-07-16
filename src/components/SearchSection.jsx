import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const SearchSection = () => {
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
            width: "55vw",
          }
        : {
            top: "150px",
            left: "600px",
            position: "absolute",
            border: "1px solid red",
          }
    );
  }, []);

  return (
    <>
      <div className="relative w-full lg:w-[815px] flex items-center justify-between bg-white rounded-full shadow-md p-4 mx-auto mb-6">
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
            {
              title: "Duration",
              detail: "Yearly or Monthly?",
            },
          ]}
          onSearchClick={() => setIsModalOpen(true)}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col w-[90vw] max-w-xs sm:max-w-md bg-white p-4 rounded-lg"
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
      </div>
    </>
  );
};

export default SearchSection;
