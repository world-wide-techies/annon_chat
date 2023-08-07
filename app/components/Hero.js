import Image from "next/image";
import LeftVector from "@/public/assets/images/hero_image_1.png";
import RightVector from "@/public/assets/images/hero_img_2.png";
import Chat from "@/public/assets/images/hero_chat_convo.png";
import ChatIcon from "@/public/assets/images/chat_icon.png";
import ArrowIcon from "@/public/assets/images/circle_arrow_icon.png";

export default function Hero() {
  return (
    <div className="relative bg-center bg-cover w-full h-[1230px] bg-hero-bg mx-auto hero-bottom">
      <div className="max-w-[1440px] h-screen mx-auto">
        <div className="flex items-center justify-center gap-4 mx-auto">
          <div className="p-[40px] mx-auto">
            <h1 className="font-lexend text-41xl text-center leading-normal font-normal text-base-white">
              Chat Anonymously, <br /> Anywhere! Anytime!
            </h1>
            <p className="text-center font-lexend leading-[28px] tracking-[0.28px] text-base-white text-base">
              Level Up Your Convos, Chat Incognito with AnonChat! 🕶️💬
            </p>
            <div className="mt-[20px] flex flex-row items-center justify-center gap-[15px]">
              <button className="rounded-90xl bg-base-white flex flex-row py-3 px-8 items-center justify-center gap-[10px] font-lexend text-sm leading-[28px] tracking-[-0.01em]">
                <span>
                  <Image src={ChatIcon} alt="chat icon" />
                </span>
                Start a Chat
              </button>

              <span>
                <button className="rounded-90xl flex flex-row py-3 px-8 items-center justify-center gap-[10px] border-[2px] border-solid border-base-white tracking-[-0.01em] font-lexend text-sm font-normal leading[28px] text-base-white">
                  <span>
                    <Image src={ArrowIcon} alt="arrow icon" />
                  </span>
                  Join a Chat
                </button>
              </span>
            </div>
            <div className="flex items-center justify-center mt-[120px]">
              <Image
                src={Chat}
                alt="chat"
                width={400}
                height={757}
                className="object-contain"
              />
            </div>
            <div
              className="absolute flex items-center justify-center
            top-[200px] left-[calc(50%_-_720px)]"
            >
              <div className="top-0 left-[130px] w-[340.55px] h-[687px] transform rotate-[-11.70] shrink-0 mt-5">
                <Image
                  src={LeftVector}
                  alt="vector image"
                  className="object-contain"
                />
              </div>
              <div className="absolute top-0 left-[1011px] w-[492.942px] h-[624.071px] transform rotate-[22.92] shrink-0 overflow-hidden">
                <Image
                  src={RightVector}
                  alt="vector image"
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
