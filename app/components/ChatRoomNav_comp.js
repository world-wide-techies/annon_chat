import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useIdentityContext } from "../lib/identityContext";
import { useRouter } from "next/navigation";

function ChatRoomNav({ selectedAvatar }) {
  const { chatroomName, setChatroomName } = useIdentityContext();
  const router = useRouter();
  const persistedRoomName = sessionStorage.getItem("chatroomName");
  const handleClick = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("chatroomName");
    router.push("/");
  };
  return (
    <header className="relative z-20 w-full px-8 lg:px-24 py-4 border-b bg-white/25">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl">
          {chatroomName
            ? chatroomName
            : persistedRoomName
            ? persistedRoomName
            : "Your Chat Room"}
        </div>
        <div className="flex items-center space-x-4">
          {/*
SEARCH ICON
        <div className=" p-2 rounded-full border-2 border-white text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      */}

          <div className="p-1.5 rounded-full border-2 border-white">
            <Image
              src={selectedAvatar}
              alt="profile img"
              width={25}
              height={25}
              className="rounded-full"
            />
          </div>
          <div className="">
            <button
              className="bg-white px-3 py-1 rounded-3xl text-[#CD3636] font-lexend"
              type="submit"
              onClick={handleClick}
            >
              Exit Chat
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ChatRoomNav;
