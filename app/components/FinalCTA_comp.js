"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import chatIcon from "../../public/assets/icons/chat.png";
import joinChatIcon from "../../public/assets/icons/joinChat.png";
import finalCtaImg from "../../public/assets/images/final_cta_img_1.png";

function FinalCTA() {
  const router = useRouter();

  return (
    <div className="">
      <div className="bg-hero-bg bg-cover flex flex-row justify-between p-4 rounded-[90px] w-[90%] m-auto shadow-lg">
        <div className="m-auto">
          <p className="text-4xl text-white mb-5 lg:flex hidden font-lexend">
            Ready to Chat Now?
          </p>
          <div className="flex flex-row gap-4">
            <button
              className="flex flex-row justify-center text-center bg-white px-9 py-2 space-x-2 rounded-3xl lg:items-center"
              onClick={(e) => {
                e.preventDefault();
                router.push("/lobby");
              }}
            >
              <Image
                src={chatIcon}
                alt="chatIcon"
                className="pointer-events-none object-contain"
              />
              <p className="text-[#2C1FA3] font-medium font-lexend">
                Start a Chat
              </p>
            </button>

            <button className="lg:flex hidden flex-row justify-center text-center bg-transparent border-[2px] border-white text-white px-9 py-2 space-x-2 rounded-3xl">
              <Image
                src={joinChatIcon}
                alt="joinChatIcon"
                className="object-contain pointer-events-none"
              />
              <p className="font-medium font-lexend">Join a Chat</p>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={finalCtaImg}
            alt="finalCtaImg"
            sizes={20}
            className="lg:flex hidden pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default FinalCTA;
