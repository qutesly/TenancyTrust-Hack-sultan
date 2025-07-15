import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ data }) => {
  return (
    <Link to={`/accommodation/${data.id}`}className="flex flex-col space-y-2">
      <div className="w-[200px] h-[186px] md:w-[324px] md:h-[314px] rounded-lg overflow-hidden">
        <img
          src={data.image }
          alt="Property Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold font-josefin text-[18px] md:text-2xl lg:text-3xl">
          {data.subtitle}
        </h3>
        <p className="font-josefin text-[14px] lg:text-lg">{data.price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
