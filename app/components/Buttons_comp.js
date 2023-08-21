import React from "react";

function Buttons({ btnText, chatroomName, username, gender }) {
  const disableBtn = !(chatroomName, username, gender);
  return (
    <button
      className={`relative bg-transparent border-2 border-[#DCDCE5] rounded-full px-2 py-1 md:px-4 md:py-2 md:text-[17px] text-sm ${
        disableBtn ? "opacity-30 cursor-not-allowed" : "hover:bg-[#ffffff4d]"
      }`}
      disabled={disableBtn}
    >
      {btnText}
    </button>
  );
}

export { Buttons };
