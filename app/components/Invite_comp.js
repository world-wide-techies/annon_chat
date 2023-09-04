"use client";

import { useEffect, useState } from "react";
import { homeUrl } from "../lib/url";
import { useRouter } from "next/navigation";
import { useIdentityContext } from "../lib/identityContext";
import { useSocketContext } from "../lib/socketContext";

export default function InviteView({ handleClick }) {
  const [copy, setCopy] = useState(false);
  const {
    chatroomName,
    setChatroomName,
    username,
    room,
    roomId,
    setRoom,
    setUsername,
  } = useIdentityContext();

  const router = useRouter();
  const chatLink = homeUrl + room;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(chatLink)
      .then(() => {
        setCopy(true);

        setTimeout(() => setCopy(false), 2000);
      })
      .catch((error) => console.error("Failed to copy link:", error));
  };

  const handleSubmit = () => {
    if (username !== "" && chatroomName !== "" && roomId !== "") {
      setRoom(`${chatroomName}-${roomId}`);
      socket.emit("join_room", room);
      console.log(room);
      router.push(`/${room}`);
    }
  };

  return (
    <div className="w-full mx-4 my-8">
      <div className="relative h-full lg:w-[820px] md:w-full rounded-[20px] mt-28 lg:mt-[276px] lg:mx-auto [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(112.91deg,_rgba(255,_255,_255,_0.51),_rgba(255,_255,_255,_0))] shadow-[8px_10px_16px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(12px)] overflow-hidden grid items-center justify-center border-2">
        <h1 className="font-lexend font-medium mt-8 lg:text-3xl text-2xl leading-8 text-base-white text-center capitalize">
          Invite Someone
        </h1>

        <div className="flex lg:mt-[9px] mt-[17px]">
          <span className="border-y lg:w-[772px] w-[311px] border-slate-100 border-opacity-20 self-stretch" />
        </div>

        <h6 className="lg:mt-8 mt-5 text-base-white text-center font-lexend text-lg leading-7 capitalize ">
          Share Link
        </h6>
        <p className="normal-case text-base-white text-center font-roboto text-xs font-medium leading-4">
          Share your link to people to chat anonymously
        </p>

        <div className="relative flex items-center justify-center mt-2">
          <div className="lg:h-[74px] w-auto h-[52px] px-6 py-4 bg-alpha-black-10 rounded-3xl flex items-center normal-case font-lexend text-base-white lg:text-xl text-base lg:leading-7 leading-5">
            <span className="mr-4">{chatLink}</span>

            {/* Button for large screens */}
            <button
              className="hidden capitalize hover:opacity-[0.7] px-4 py-2 text-base-white gap-[10px] rounded-full border-2 border-base-white bg-inherit lg:block"
              onClick={handleCopy}
            >
              Copy link
            </button>

            {/* Feedback tooltip */}
            {copy && (
              <div className="hidden absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-green-500 border-2 border-base-white text-base-white text-xs rounded-full shadow-md lg:block">
                Copied!
              </div>
            )}
          </div>
        </div>

        {/*Button for small screens */}
        <div className="flex items-center justify-center mt-4">
          <button
            className="sm:hidden capitalize hover:opacity-[0.7] px-4 py-2 text-base-white gap-[10px] rounded-full border-2 border-base-white bg-inherit relative z-10"
            onClick={handleCopy}
          >
            Copy link
          </button>

          {/* Conditionally render feedback based on the copied state */}
          {copy && (
            <div className="sm:hidden absolute transform top-0 left-1/2 -translate-x-1/2 transition-transform ease-out duration-300 translate-y-0 mt-2 px-4 py-2 bg-green-500 border-2 border-base-white text-base-white text-xs rounded-full shadow-md">
              Copied!
            </div>
          )}
        </div>

        <div className="flex items-center justify-center lg:mt-12 mt-[116px] lg:mb-12 mb-8">
          <button
            className="capitalize font-lexend lg:text-xl text-base leading-7 text-[rgb(92,70,202)] lg:px-8 lg:py-3 px-4 py-2 gap-[10px] bg-base-white hover:bg-opacity-[0.7] rounded-full"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            start chat
          </button>
        </div>
      </div>
    </div>
  );
}
