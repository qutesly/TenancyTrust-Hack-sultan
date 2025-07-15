import React from "react";

const HeroModalComponent = ({ imageSrc, description }) => {
  return (
    <div>
      <div className="flex flex-col items-start space-y-4">
        <img src={imageSrc} alt={description} />
        <h3 className="text-[10px] md:text-[25px] lg:text-[25px] font-semibold">{description}</h3>
      </div>
    </div>
  );
};

export default HeroModalComponent;
