import React from "react";

const SearchBar = ({ questions = [], onSearchClick, className, showMobile = true }) => {

  return (
    <>
      <div
        className={`bg-white hidden lg:flex items-center justify-between w-full pl-4 ${className}`}
      >
        {questions.map((question, index) => (
          <div
            key={index}
            className={`flex-col items-start ${
              index !== 0 ? "border-l border-l-gray-400 pl-4" : ""
            }`}
          >
            <h1 className="font-bold text-sm font-inter">{question.title}</h1>
            <p className="text-xs ">{question.detail}</p>
          </div>
        ))}

        <button
          onClick={onSearchClick}
          className="bg-[#9747FF] rounded-full p-2 text-white"
        >
          <img src="/search-icon.svg" alt="search icon" className="w-5 h-5" />
        </button>
      </div>
      {showMobile && (
        <div className="bg-white flex lg:hidden items-center justify-between w-full">
          <p className="text-sm font-medium">Start your search</p>
          <button
            onClick={onSearchClick}
            className="bg-[#9747FF] rounded-full p-2 text-white"
          >
            <img src="/search-icon.svg" alt="search icon" className="w-3 h-3" />
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
