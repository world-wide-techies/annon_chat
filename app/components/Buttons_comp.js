import React from "react";

function Buttons({ btnText }) {
  return (
    <button className="relative border-2 border-[#DCDCE5] rounded-full px-2 py-1 md:px-4 md:py-2 hover:bg-[#ffffff4d] md:text-[17px] text-sm">
      {btnText}
    </button>
  );
}

export { Buttons };
