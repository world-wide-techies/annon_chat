"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showCTA, setShowCTA] = useState(true);
  const [joinCTA, setJoinCTA] = useState(false);

  return (
    <div className="relative bg-center bg-cover w-full lg:h-[1331px] h-[1135px] bg-hero-bg mx-auto lg:hero-bottom hero-bottom_md overflow-hidden">
      <div className="max-w-[1440px] h-screen mx-auto">
        <div className="flex items-center justify-center gap-4 mx-auto">
          <div className="p-[40px] mx-auto">
            <h1 className="font-lexend lg:text-6xl text-center leading-normal font-normal text-base-white text-3xl">
              Chat Anonymously, <br /> Anywhere! Anytime!
            </h1>
            <p className="text-center font-lexend lg:leading-loose lg:tracking-normal leading-5 tracking-[0.16px] text-base-white lg:text-xl text-base">
              Level Up Your Convos, Chat Incognito with AnonChat! 🕶️💬
            </p>
            {showCTA && (
              <div className="mt-[31px] lg:flex gap-[15px] grid grid-rows-2 items-center justify-center">
                <button className="rounded-full bg-base-white flex lg:py-3 lg:px-8 py-2 px-4  items-center justify-center gap-[10px] font-lexend text-sm leading-[28px] tracking-[-0.01em] text-[#755BDF]">
                  <span>
                    <Image
                      src="/assets/images/chat_icon.png"
                      width={24}
                      height={24}
                      alt="chat icon"
                    />
                  </span>
                  Start a Chat
                </button>

                <span>
                  <button
                    onClick={() => {
                      setShowCTA(false);
                      setJoinCTA(true);
                    }}
                    className="rounded-full flex lg:py-3 lg:px-8 py-2 px-4 items-center justify-center gap-[10px] border-[2px] border-solid border-base-white tracking-[-0.01em] font-lexend text-sm font-normal leading[28px] text-base-white"
                  >
                    <span>
                      <Image
                        src="/assets/images/circle_arrow_icon.png"
                        width={24}
                        height={24}
                        alt="arrow icon"
                      />
                    </span>
                    Join a Chat
                  </button>
                </span>
              </div>
            )}

            {joinCTA && (
              <form
                onSubmit={() => {}}
                className="mt-[31px] lg:flex gap-[15px] grid items-center justify-center"
              >
                <input
                  className="rounded-full text-base-white flex lg:py-2 lg:px-12 py-2 px-4  items-center justify-center gap-[10px] font-lexend text-sm leading-[28px] tracking-[-0.01em] bg-inherit border-2"
                  type="text"
                  placeholder="Enter Chat Link"
                  id="chatLink"
                  name="chatLink"
                />

                <span className="items-center justify-center flex">
                  <button
                    className="rounded-full flex lg:py-3 lg:px-8 py-2 px-4 items-center justify-center gap-[10px] border-[2px] border-base-white tracking-[-0.01em] font-lexend text-sm font-normal leading[28px] text-[#755BDF] bg-base-white bg-opacity-50 border-none  hover:bg-base-white"
                    type="submit"
                  >
                    Join Chat
                  </button>
                </span>
              </form>
            )}

            <figure className=" flex items-center justify-center lg:mt-[120px] mt-[96px]">
              <Image
                src="/assets/images/hero_chat_convo.png"
                alt="chat"
                width={400}
                height={700}
                objectFit="contain"
                quality={100}
                className="opacity-75"
              />
            </figure>
            <div
              className="absolute flex items-center justify-center
            top-[200px] left-[calc(50%_-_720px)]"
            >
              <figure className="w-[473px] h-[742px] top-0 left-[130px] transform rotate-[-11.70] flex-shrink-0 hidden lg:block">
                <Image
                  src="/assets/images/hero_image_1.png"
                  alt="vector image"
                  width={500}
                  height={500}
                  objectFit="contain"
                  quality={100}
                />
              </figure>
              <figure className="w-[473px] h-[759px] absolute top-0 left-[916px] transform rotate-[22.92] flex-shrink-0 hidden lg:block">
                <Image
                  src="/assets/images/hero_img_2.png"
                  width={500}
                  height={500}
                  quality={100}
                  alt="vector image"
                  objectFit="contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
