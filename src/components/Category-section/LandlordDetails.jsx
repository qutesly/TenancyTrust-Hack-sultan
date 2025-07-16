import React from "react";

const LandlordDetails = () => {
  return (
    <>
      <div className="flex items-center gap-4 flex-wrap">
        <img
          src="/landlord-Profile-pic.png"
          alt="Landlord"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col flex-wrap">
          <h3>Mr Adelabu Chima</h3>
          <p>johndoe@example.com</p>
          <p>+1234567890</p>
        </div>
      </div>
    </>
  );
};

export default LandlordDetails;
