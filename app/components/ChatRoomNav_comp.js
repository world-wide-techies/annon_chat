import Image from "next/image";
import Link from "next/link";
import React from "react";

function ChatRoomNav() {
  return (
    <header className="px-24 py-4 border-b bg-white/25">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex space-x-2 items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <p className="text-sm">Return to Home</p>
        </Link>
        <div className="text-white text-2xl">ChillZone🎄🎗</div>
        <div className="flex items-center space-x-4">
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

          <div className=" p-2 rounded-full border-2 border-white">
            <Image
              src="/assets/avatars/friendly/friendlyFemale_1.png"
              alt="profile img"
              width={25}
              height={25}
            />
          </div>
          <div className="">
            <button
              className="bg-white px-3 py-1 rounded-3xl text-[#CD3636] font-lexend"
              type="submit"
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
