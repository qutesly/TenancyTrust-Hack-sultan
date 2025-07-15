import React from "react";

const CategoryImage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4">
      <div className="w-full h-full md:w-[723px] md:h-[429px] flex items-center justify-center">
        <div>
          <img
            src="/building-photo.png"
            alt="A building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-full md:w-[580px] md:h-[429px] flex items-center justify-center gap-2">
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/pic1.png"
            alt="A building"
            className="w-full h-full object-cover"
          />
          <img
            src="/pic3.png"
            alt="A building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/pic2.png"
            alt="A building"
            className="w-full h-full object-cover"
          />
          <img
            src="/pic4.png"
            alt="A building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryImage;
