import React from "react";

const FlatCard = () => {
  const sampleImg =
    "https://imgs.search.brave.com/pGiTGrGY1Jce3O8_ZZRp6lOmuI2E-6C3xz5JEpPucdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmo4/YzJyajJmOWI3OC5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL1Bh/cmtfUm9hZF9CaWdf/UGxheWdyb3VuZC0x/LmpwZw";
  return (
    <>
      <div className=" flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-11/12 h-52 my-5 mx-auto border-2 border-gray-200 rounded-md p-4 ">
        <div className="w-[40%] h-full ">
          <img src={sampleImg} className=" rounded-lg h-full w-full" alt="" />
        </div>
        <div className="w-[60%] h-auto pl-4">
          <h2 className="font-semibold text-lg mb-2">
            1 BHK Residential House for Rent
          </h2>
          <p className="w-[90%] mb-2 h-auto text-sm text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Saepe Lorem ipsum
          </p>
          <h1 className="text-lg font-bold mb-2">₹10000</h1>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FlatCard;
