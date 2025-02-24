import React from "react";

function Dressess() {
  return (
    <>
      <div className="mt-20 bg-[#F0F0F0] rounded-4xl max-w-7xl mx-auto p-4 sm:p-6 md:p-10 lg:p-15">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6">
          BROWSE BY DRESS STYLE
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4 sm:px-6 md:px-12 mt-6">
          <div className="md:col-span-2">
            <img
              src="./Frame 61.png"
              alt="Casual"
              className="w-full h-[300px] sm:h-[250px] md:h-[289px] object-cover rounded-[20px]"
            />
          </div>
          <div className="md:col-span-3">
            <img
              src="./Frame 62.png"
              alt="Formal"
              className="w-full h-[170px] sm:h-[250px] md:h-[290px] object-cover rounded-[20px]"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4 sm:px-6 md:px-12 mt-4">
          <div className="md:col-span-3">
            <img
              src="./Frame 64.png"
              alt="Party"
              className="w-full h-[170px] sm:h-[250px] md:h-[290px] object-cover rounded-[20px]"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src="./Frame 63.png"
              alt="Gym"
              className="w-full h-[300px] sm:h-[250px] md:h-[289px] object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dressess;
