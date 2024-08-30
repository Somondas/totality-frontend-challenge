import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FlatCard from "../components/shared/FlatCard";
// location, price range,
// number of bedrooms, or amenities.

const Home = () => {
  return (
    <>
      <div className=" w-full h-[calc(100vh - 4rem)] p-3 ">
        <Box
          boxShadow={{
            md: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          }}
          borderRadius={{
            md: "10px",
          }}
        >
          <div className="flex w-full h-[4rem]  align-center justify-center">
            <div className="flex h-full items-center gap-2 p-5">
              <select
                required
                className="text-black bg-white px-2 py-1 transition-all cursor-pointer  font-semibold hover:border-blue-600/30 border 
                border-gray-400 rounded-lg outline-blue-600/50 appearance-none invalid:text-gray-700 w-40"
              >
                <option value="" disabled selected>
                  Location
                </option>
                <option value="kolkata">Kolkata</option>
                <option value="lucknow">Lucknow</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>
            <div className="flex h-full items-center gap-2 p-5">
              <select
                required
                className="text-black bg-white px-2 py-1 transition-all cursor-pointer  font-semibold hover:border-blue-600/30 border 
                border-gray-400 rounded-lg outline-blue-600/50 appearance-none invalid:text-gray-700 w-40"
              >
                <option value="" disabled selected>
                  Price Range
                </option>
                <option value="10k-20k">10k-20k</option>
                <option value="option-2">20k-30k</option>
                <option value="option-3">30k-40k</option>
              </select>
            </div>
            <div className="flex h-full items-center gap-2 p-5">
              <select
                required
                className="text-black bg-white px-2 py-1 transition-all cursor-pointer  font-semibold hover:border-blue-600/30 border 
                border-gray-400 rounded-lg outline-blue-600/50 appearance-none invalid:text-gray-700 w-40"
              >
                <option value="" disabled selected>
                  Bedrooms
                </option>
                <option value="option-1">1</option>
                <option value="option-2">2</option>
                <option value="option-3">3</option>
                <option value="option-3">4</option>
              </select>
            </div>
          </div>
          <div className="w-10/12 h-0 border border-gray-800 mx-auto mb-2"></div>
          <div className="w-full overflow-y-auto h-[31rem]">
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
          </div>
        </Box>
      </div>
    </>
  );
};

export default AppLayout()(Home);
