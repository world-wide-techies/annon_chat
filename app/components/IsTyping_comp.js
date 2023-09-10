import Image from "next/image";
import React from "react";

function IsTyping({userName, avatar}) {
  return (
    <div className="flex items-center space-x-2">
      <div className="rounded-full">
        <Image
          src={avatar}
          alt="profile img"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <p className="text-white text-base font-roboto">{userName} <span className="italic">is typing...</span></p>
    </div>
  );
}

export default IsTyping;
