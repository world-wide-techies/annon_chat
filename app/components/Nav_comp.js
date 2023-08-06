import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="w-[1440px] h-[86px] px-[100px] py-4 bg-white bg-opacity-5 shadow justify-between items-center gap-2 inline-flex">
        <div className="justify-center items-center gap-2 flex">
          <div className="text-center text-red-100 text-[40px] font-medium leading-[54px]">
            AnonChat!
          </div>
        </div>
        <div className="px-8 py-3 bg-white rounded-[109px] shadow-inner justify-center items-center gap-2.5 flex">
          <div className="w-6 h-6 relative" />
          <div className="text-indigo-500 text-xl font-normal leading-7">
            Start a Chat
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
