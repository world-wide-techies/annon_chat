import React from "react";

function Buttons({ btnText }) {
  return (
    <button className="border-2 border-[#DCDCE5] rounded-full px-4 py-2 hover:bg-[#ffffff4d]">
      {btnText}
    </button>
  );
}

export { Buttons };
