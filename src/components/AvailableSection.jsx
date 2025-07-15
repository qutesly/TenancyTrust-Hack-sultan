import React from "react";
import PropertyListing from "./PropertyListing";

const sampleProperties = [
  {
    id: 1,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
  {
    id: 2,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
  {
    id: 3,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
  {
    id: 4,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
  {
    id: 5,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
  {
    id: 6,
    subtitle: "Spacious self con",
    price: "$1.00 million dollars",
    image: "/propertyImage.png",
  },
];

const AvailableSection = () => {
  return (
    <div className="bg-[#DADADA] w-full py-10 px-4 overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <PropertyListing title="Available For Move in" data={sampleProperties} />
        <PropertyListing title="Available From next week" data={sampleProperties} />
      </div>
    </div>
  );
};

export default AvailableSection;
