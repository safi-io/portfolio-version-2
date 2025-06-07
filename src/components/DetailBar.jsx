import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

export default function DetailBar({
  mainHeading,
  institute,
  location,
  additionalInfo,
  date,
}) {
  return (
    <>
      <div className="flex items-center justify-between mt-8 text-[#ebe7e7]">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="text-lg text-[#efeded] lg:text-2xl">
              {mainHeading}
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5 mt-2 text-sm lg:text-base">
            <span className="flex items-center gap-2 font-light">
              <FaUniversity /> {institute}
            </span>
            {location && (
              <span className="flex items-center gap-2 font-light">
                <FaLocationDot /> {location}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 font-light">
          <div>
            <span className="rounded-3xl bg-gray-600 px-3 py-[1px]">
              {additionalInfo}
            </span>
          </div>
          <div>{date}</div>
        </div>
      </div>

      <div className="bg-white h-[1px] mt-5"></div>
    </>
  );
}
