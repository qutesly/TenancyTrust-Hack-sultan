import React, { useState } from "react";
import Modal from "./Modal";
import HeroModal from "../data";
import HeroModalComponent from "./HeroModal";
import { Link } from "react-router-dom";

const HeroImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-96 mb-4">
      <div className="w-full h-full relative rounded-lg overflow-hidden">
        <img
          src="/Landing-img.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
        <div className="absolute top-1/2 -translate-y-1/2 right-4 left-4 md:left-8 lg:left-20 text-white z-30">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold font-josefin mb-4">
            List your property today and get ready <br /> for tenants as quick
            as possible
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn rounded-lg font-inter hover:bg-white hover:text-black hoverEffect"
          >
            List Apartment
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="flex flex-col w-[1200px] bg-white p-4 rounded-lg font-josefin px-4 md:px-8 lg:px-16 mx-4"
      >
        <div className="relative">
          <h2 className="text-center font-semibold w-[196px] md:w-full text-[15px] md:text-[24px] lg:text-[32px]">
            What type of property do you want to list?
          </h2>
          <div className="absolute top-0 right-3 flex items-center justify-center rounded-full w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-black text-white text-[40px] font-light hover">
            <button
              onClick={() => setIsModalOpen(false)}
              className=""
            >
              <img src="/times.svg" alt="Close" className="w-2 md:w-3 h-2 md:h-3" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between my-4 gap-4">
          {HeroModal.map((item, index) => (
            <HeroModalComponent
              key={index}
              imageSrc={item.imageSrc}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex items-center justify-end">
          <Link to={'/sign-in'} className="btn rounded-lg font-inter hover:bg-white hover:text-black hoverEffect">
            Next
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default HeroImage;
