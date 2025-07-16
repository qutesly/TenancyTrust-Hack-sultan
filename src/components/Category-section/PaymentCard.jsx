import React from "react";

const PaymentCard = ({ onRegister }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center rounded-lg p-6"
      style={{
        backgroundImage: "url('/payment-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "350px",
        padding: "20px",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p>
          $900,000 <span>per annum</span>
        </p>

        <div className="border border-black h-20 w-full rounded-xl p-1 mt-4 mb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="">
              <p className="text-[10px]">
                Agreement <br />{" "}
                <span className="font-semibold text-[15px]">$90,000</span>
              </p>
            </div>

            <div className="bg-black w-[2px] h-[40px]" />

            <div>
              <p className="text-[10px]">
                Agreement <br />{" "}
                <span className="font-semibold text-[15px]">$90,000</span>
              </p>
            </div>
          </div>

          <div className="bg-black w-full h-[1px]" />

          <div className="text-center">
            <p className="text-[10px]">service charge</p>
            <p className="text-[15px] font-medium">To be discussed</p>
          </div>
        </div>

        <button
          className="btn rounded-full w-full hover:text-black hover:bg-white"
          onClick={onRegister}
        >
          Register
        </button>
        <p className="text-[10px] text-center">
          You won't be charged until after inspection
        </p>
      </div>
    </div>
  );
};

export default PaymentCard;
