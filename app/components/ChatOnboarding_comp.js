"use client";

import Image from "next/image";
import Footer from "./Footer_comp";
import OnboardingNav from "./OnboardingNav_comp";
import { useIdentityContext } from "../lib/identityContext";
import Personaliies from "./Personalities_comp";
<<<<<<< HEAD
import AvatarComponent from "./Avatar_comp";

export default function OnboardingComp() {
  const { gender, setGender } = useIdentityContext();
=======
import { useState } from "react";

export default function OnboardingComp() {
  
  const[chatroomName, setChatroomName] = useState('')
  const[username, setUsername] = useState('')
  const[gender, setGender] = useState('')

  const handleChatRoom = (e)=>{
    setChatroomName(e.target.value)
  }
  const handleUsername = (e)=>{
    setUsername(e.target.value)
  }
  const handleGender = (e)=>{
    setGender(e.target.value)
  }
>>>>>>> 6f763d137fe7f212b01703d0a9a67c1316b06889

  return (
    <section className="relative w-full h-full mx-auto bg-center bg-hero-bg bg-cover scroll-smooth antialiased overflow-hidden">
      <OnboardingNav />
      <div className="relative max-h-[1024px] mx-auto flex-shrink-0 ">
        <div className="relative mx-auto flex items-center justify-center gap-4">
          <aside className="absolute top-[400px] left-[calc(50%_-_720px)] flex items-center justify-center">
            <figure className="absolute hidden lg:block w-[679px] h-[679px] top-0 left-10 flex-shrink-0">
              <Image
                src="/assets/images/onboarding_img_1.png"
                alt="vector image"
                width={443}
                height={788}
                objectFit="contain"
                quality={100}
                draggable="false"
              />
            </figure>
          </aside>
          <aside className="absolute right-[calc(25%_-_720px)] top-[320px] flex items-center justify-center gap-4">
            <figure className="absolute hidden lg:block w-[679px] h-[679px] top-0 right-44">
              <Image
                src="/assets/images/onboarding_img_2.png"
                width={443}
                height={788}
                quality={100}
                alt="vector image"
                objectFit="contain"
                draggable="false"
              />
            </figure>
          </aside>
          <div className="w-full mx-4 my-8">
            <div className="relative lg:mt-[40px] lg:h-full h-full lg:w-[820px] md:w-full rounded-[20px] mt-[32px] lg:mx-auto [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(112.91deg,_rgba(255,_255,_255,_0.51),_rgba(255,_255,_255,_0))] shadow-[8px_10px_16px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(12px)] overflow-hidden grid items-center justify-center border-2">
              <h1 className="flex items-center justify-center text-base-white font-lexend lg:text-3xl text-2xl font-medium leading-9 tracking[-0.54px] mt-8">
                Start A Chat
              </h1>
              <div className="relative flex items-center justify-center lg:mt-[13px] mt-[17px]">
                <span className="h-px lg:w-[772px] w-[311px] bg-white bg-opacity-20 self-stretch" />
              </div>
              <form
                className="relative lg:p-6 p-4 lg:gap-6 gap-4"
                onSubmit={() => {}}
              >
                <div className="relative lg:flex lg:justify-between lg:mt-[18px] mt-[6px] lg:gap-6 lg:mb-6">
                  <div className="relative mx-auto">
                    <label
                      htmlFor="name"
                      className="font-lexend text-base-white lg:text-xl text-lg font-normal leading-7"
                    >
                      Chat Room Name
                    </label>
                    <p className="font-roboto font-medium text-xs leading-4 text-base-white lg:mb-2 mb-1">
                      Give your chat room a catchy name or topic
                    </p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required="required."
                      minLength={3}
                      maxLength={30}
                      placeholder="ChillZone 🌴"
                      className="flex items-center justify-center px-4 lg:w-[374px] lg:h-[44px] w-full h-[40px] py-3 rounded-[109px] leading-3 bg-gray-800 bg-opacity-20 input-placeholder self-stretch text-base-white font-roboto border-2 mb-4"
                      onChange={handleChatRoom}
                    />
                  </div>
                  <div className="relative mx-auto">
                    <label
                      htmlFor="username"
                      className="font-lexend text-base-white lg:text-xl text-lg font-normal leading-7"
                    >
                      Username
                    </label>
                    <p className="font-roboto font-medium text-xs leading-4 text-base-white lg:mb-2 mb-1">
                      Your cool chat name
                    </p>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required="required."
                      minLength={5}
                      maxLength={15}
                      placeholder="ChattyKatty"
                      onChange={handleUsername}
                      className="flex items-center justify-center px-4 lg:w-[374px] lg:h-[44px] w-full h-[40px] py-3 rounded-[109px] leading-3 bg-gray-800 bg-opacity-20 input-placeholder self-stretch text-base-white font-roboto border-2"
                    />
                  </div>
                </div>
                <div className="relative lg:flex lg:flex-col items-center justify-center mt-4">
                  <label
                    htmlFor="gender"
                    className=" font-lexend text-base-white lg:text-xl text-lg font-normal leading-7"
                  >
                    Select Your Gender
                  </label>
                  <p className=" font-roboto font-medium text-xs leading-4 text-base-white lg:mb-2 mb-1">
                    Choose your gender below
                  </p>
                  <span className="relative lg:flex items-center justify-center">
                    <select
                      type="text"
                      id="gender"
                      name="gender"
                      required="required."
                      placeholder="Type in your cool username e.g ChattyKatty"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full lg:w-[374px] h-[40px] px-4 rounded-[109px] leading-3 bg-gray-800 bg-opacity-20 text-base-white font-roboto border-2 lg:text-sm text-xs font-[400] tracking-[-0.14px] appearance-none"
                      onChange={handleGender}
                    >
                      <option value="" disabled selected>
                        Pick Your Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.75781 10.5861L9.17281 9.17212L12.0008 12.0001L14.8298 9.17212L16.2438 10.5861L12.0008 14.8281L7.75781 10.5861Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
<<<<<<< HEAD
                <Personaliies />
                <AvatarComponent />
=======
                <Personaliies
                  chatroomName={chatroomName}
                  username={username}
                  gender={gender}
                />
>>>>>>> 6f763d137fe7f212b01703d0a9a67c1316b06889
                <div className="flex items-center justify-center mb-8">
                  <button
                    className="w-auto h-auto lg:px-8 lg:py-3 px-4 py-2 gap-[10px] bg-base-white mt-8 rounded-[109px] font-lexend lg:text-xl text-base leading-7 font-normal text-[rgb(92,70,202)]"
                    type="submit"
                  >
                    Create New Chat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
