import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../api/property";

const PropertyListing = ({ title = "", className, data = [] }) => {
  const [propertyList, setPropertyList] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetch = async () => {
        try {
          const data = await getProperties();
          setPropertyList(data);
        } catch (error) {
          console.log("Error fetching properties:", error);
        } finally {
          setLoading(false);
        }
      };

      fetch();
  }, []);

  if (loading) return <p>Loading Properties...</p>;

  return (
    <div className="w-full flex flex-col my-4">
      {title && (
        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold font-josefin mb-4">
          {title}
        </h2>
      )}
      <div className="w-screen -mx-10 px-10 overflow-x-auto scrollbar-hide">
        <div className="inline-flex gap-4 min-w-max justify-end ">
          {propertyList.map((property) => (
            <div key={property.id} className="flex-shrink-0">
              <PropertyCard data={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
