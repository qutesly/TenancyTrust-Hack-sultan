import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const PaymentModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      style={{ overflowY: "scroll" }}
      className="relative flex flex-col w-[1200px] bg-[#1A1818] rounded-lg font-josefin px-4 md:px-8 lg:px-20 mx-4 mt-auto md:mt-[7rem] scrollbar-hide"
    >
      <div className="absolute top-0 md:-top-8  left-1/2 right-1/2 flex items-center justify-center rounded-full w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-black text-black text-[40px] font-light hoverEffect ">
        <button onClick={onClose} className="">
          <img
            src="/times.svg"
            alt="Close"
            className="w-2 md:w-3 h-2 md:h-3 text-black"
          />
        </button>
      </div>

      <div className="w-full flex flex-col items-start justify-center text-white">
        <div className="flex items-start gap-2 font-semibold text-lg mb-4">
          <img
            src="/white-alert-triangle.svg"
            alt="alert"
            className="w-5 h-5"
          />
          <p className="text-[12px] md:text-[20px]">
            Inspect the apartment before making payment.{" "}
            <span className="text-[#9747FF]">Inspect now</span>
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <p>Select Payment Method</p>
            <button className="bg-[#565353] py-2 px-4 flex  rounded-lg gap-4 w-full my-4">
              <img src="/paystack logo.png" alt="" className="w-6" />
              paypal
              <div className="flex justify-end w-full">
                <img src="/fi_disc.svg" alt="logo" className="w-6" />
              </div>
            </button>
            <button className="bg-[#565353] py-2 px-4 flex rounded-lg gap-4 w-full my-4">
              <img src="/paystack logo.png" alt="logo" className="w-6" />
              paystack
              <div className="flex justify-end w-full">
                <img src="/fi_disc.svg" alt="logo" />
              </div>
            </button>
            <button className="bg-[#565353] py-2 px-4 flex rounded-lg gap-4 relative w-full my-4">
              <img src="/credit-card.png" alt="logo" className="" />
              credit/debit card
              <div className="absolute right-4">
                <img src="/fi_disc.svg" alt="logo" />
              </div>
            </button>

            <div className="w-full px-4 py-2 bg-[#565353] mt-8">
              <p className="mb-2">About to pay</p>
              <h2 className="text-[30px] md:text-[32px] lg:text-[50px]">
                $ 1,080, 000
              </h2>
              <p className="mb-2">
                payment for spacious self contain apartment in Yaba
              </p>
              <div>
                <img src="/rectangle-apt.png" alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[30px] md:text-[32px] lg:text-[50px]">
              Payment
            </h1>
            <p className="mb-4">
              To finalize your payment kindly complete your details using a
              Valid Credit/Debit Card
            </p>

            <form className="w-full">
              <div className="space-y-1 mb-4">
                <p>Cardholder Name</p>
                <input
                  type="text"
                  placeholder="Hack Sultan"
                  className="w-full px-4 py-2 bg-[#565353] outline-none"
                />
              </div>

              <div className="space-y-1 mb-4">
                <p>Card Number</p>
                <input
                  type="number"
                  placeholder="123 4567 8901"
                  className="w-full px-4 py-2 bg-[#565353] outline-none"
                />
              </div>

              <div className="w-full flex items-center justify-between gap-2 mb-4">
                <div className="w-1/2 space-y-1">
                  <p>Expiry Date</p>
                  <input
                    type="date"
                    placeholder="12/3"
                    className="w-full px-4 py-2 bg-[#565353] outline-none"
                  />
                </div>
                <div className="w-1/2 space-y-1">
                  <p>CVV</p>
                  <input
                    type="number"
                    placeholder="123"
                    className="w-full px-4 py-2 bg-[#565353]"
                  />
                </div>
              </div>

              <div className="w-full space-y-1 mb-4">
                <p>Discount Coupon Optional</p>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#565353]"
                  />
                  <button className="bg-white text-black p-2 text-[14px]">
                    Apply
                  </button>
                </div>
              </div>
              <div className="w-full">
                <button className="btn w-full">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="text-white font-josefin text-[12px] md:text-[20px] text-center mt-4">
        All Rights Reserved by{" "}
        <Link to={"/"} className="text-[#9747FF]">
          Tenancytrust.ng
        </Link>
      </p>
    </Modal>
  );
};

export default PaymentModal;
