import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import Modal from "../Modal";
import LandlordDetails from "./LandlordDetails";
import RatingChart from "../UI/RatingChart";
import StarRating from "../UI/StarRating";
import PaymentModal from "./PaymentModal";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col font-josefin">
      <h2 className="font-semibold text-[18px] md:text-[24px] lg:text-[30px]">
        Meet The Landlord
      </h2>
      {/* CONTAINER */}
      <div className="flex flex-col md:flex-row items-start gap-20 mt-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <LandlordDetails />
            <div className="flex flex-col items-center justify-center w-full md:w-[289px]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn rounded-md hover:bg-white hover:text-black hoverEffect mb-2"
              >
                Message
              </button>
              <p className="text-center text-[12px]">
                For your Safety Always use Tenancytrust to communicate and make
                payments
              </p>
            </div>
          </div>
          <div className="border-t border-t-gray-500 pt-4 w-full h-[2px] mt-4" />
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-[30px] mb-3">Perks</h3>
            <p className="tracking-wide leading-10">
              Spacious <br />
              Access to the Island <br />
              Good Environment
            </p>
          </div>
          <div className="border-t border-t-gray-500 pt-4 w-full h-[2px] mt-4" />
        </div>
        {/* RIGHT SIDE */}
        <div>
          <PaymentCard onRegister={() => setIsPaymentModalOpen(true)} />
        </div>
      </div>

      <div className="my-4">
        <h3 className="font-semibold text-[30px] mb-3">About this place</h3>
        <p className="tracking-wide leading-10">
          This is a nice and spacious self con located at the heart of lagos.{" "}
          <br /> This property is located in a good environment , a gated
          compound and easily <br /> located.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <img src="/location-icon.svg" alt="Location Icon" />
          <p>John str, Ekurt, Yaba, Lagos</p>
        </div>
      </div>

      <div className="border-t border-t-gray-500 my-4 w-full h-[2px]" />

      <div className="w-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[36px] flex items-center gap-2">
            <img src="/star-icon.svg" alt="star icon" />
            3.5
          </h2>
          <h2 className="text-[36px] flex items-center gap-2 underline">
            .50 Reviews
          </h2>
        </div>

        <div className="w-full flex flex-wrap items-start justify-between gap-4 my-4">
          <div className="">
            <p className="text-gray-400 text-lg">Overall Rating</p>
            <RatingChart />
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-gray-400 text-lg">Rate the Landlord</p>
            <StarRating />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-gray-400 text-lg">Drop a review</p>
            <form>
              <textarea
                id=""
                placeholder="Type your review"
                className="p-4 bg-[#DADADA] outline-none"
              ></textarea>
              <div className="w-full flex justify-end">
                <button className="btn rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="flex md:hidden">
          <PaymentCard onRegister={() => setIsPaymentModalOpen(true)} />
        </div> */}
      </div>

      {/* Modal for messaging */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={{ overflowY: "scroll" }}
        className="relative flex flex-col w-[1200px] bg-[#D9D9D9] rounded-lg font-josefin px-4 md:px-8 lg:px-20 mx-4 mt-auto scrollbar-hide"
      >
        <div className="absolute top-0 md:-top-8  left-1/2 right-1/2 flex items-center justify-center rounded-full w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-black text-black text-[40px] font-light hoverEffect ">
          <button onClick={() => setIsModalOpen(false)} className="">
            <img
              src="/times.svg"
              alt="Close"
              className="w-2 md:w-3 h-2 md:h-3 text-black"
            />
          </button>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-start gap-2 font-semibold text-lg mb-4">
            <img src="/alert-icon.svg" alt="alert" className="w-5 h-5" />
            <p className="text-[12px] md:text-[20px]">
              Be careful about how you share your personal information.{" "}
              <span className="text-[#9747FF]">Review T&C</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4">
            <div className="space-y-2 w-full lg:w-1/2">
              <LandlordDetails />
              <button className="btn rounded-lg w-full text-[16px] font-semibold hover:bg-white hover:text-black hoverEffect">
                Contact Now
              </button>
              <textarea
                name="Type Message"
                id=""
                placeholder="Type your message"
                className="w-full bg-[#565353] rounded-lg p-4 min-h-[100px] lg:min-h-[249px] text-white outline-none font-inter"
              ></textarea>
              <div className="flex items-center justify-between w-full gap-2 -translate-y-2">
                <button className="text-[#9747FF] border border-[#9747FF] rounded-full p-2 text-[10px] md:text-[15px]">
                  Is this available
                </button>
                <button className="text-[#9747FF] border border-[#9747FF] rounded-full p-2 text-[10px] md:text-[15px]">
                  Book Inspection
                </button>
                <button className="text-[#9747FF] border border-[#9747FF] rounded-full p-2 text-[10px] md:text-[15px]">
                  Is it negotiable
                </button>
              </div>
              <div className="flex justify-end w-full ">
                <button className="btn rounded-lg hoverEffect hover:bg-white hover:text-black">
                  Start Chat
                </button>
              </div>
            </div>
            <div className="w-full h-full lg:w-[370px]">
              <img src="/Modal-photo.png" alt="Modal" />
            </div>
          </div>
        </div>
        <p className="text-black font-josefin text-[12px] md:text-[20px] text-center mt-4">
          All Rights Reserved by{" "}
          <Link to={'/'} className="text-[#9747FF]">Tenancytrust.ng</Link>
        </p>
      </Modal>

      
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
        />
    </div>
  );
};

export default ContactSection;
