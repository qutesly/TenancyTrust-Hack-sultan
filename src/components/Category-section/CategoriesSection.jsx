import React, { useEffect, useState } from "react";
import CategoryImage from "./CategoryImage";

const CategoriesSection = ({ accommodationId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodationData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://web-production-f6fa0.up.railway.app/api/properties/${accommodationId}`
        );
        setData(response.data);
      } catch (error) {
        setError(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (accommodationId) {
      fetchAccommodationData();
    }
  }, [accommodationId]);

  if (loading) return <p>Loading accommodation...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No accommodation found.</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4 font-josefin ">
      <div className="flex items-center justify-between w-full gap-4 mb-4">
        <h2 className="w-full text-lg md:text-xl lg:text-3xl font-semibold">
          Spacious Self con in the Heart of Yaba
          {/* {data.subtitle} */}
        </h2>
        <div className="w-full flex items-center justify-end gap-4">
          <div className="flex items-center gap-1">
            <img src="/alert-icon.svg" alt="alert" className="w-5 h-5" />
            <p className="text-xs md:text-base">Report</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="/saveTag-icon.svg" alt="" className="w-5 h-5" />
            <p className="text-xs md:text-base">Save</p>
          </div>
        </div>
      </div>
      <CategoryImage />
    </div>
  );
};

export default CategoriesSection;
