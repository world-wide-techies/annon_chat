import React from "react";
import { Buttons } from "./Buttons_comp";

function StartChat() {
  const buttonTexts = [
    { personality: "Adventurous 🌍" },
    { personality: "Creative 🎨" },
    { personality: "Compassionate ❤️" },
    { personality: "Witty 😄" },
    { personality: "Ambitious 💪" },
    { personality: "Chill 😎" },
    { personality: "Energetic ⚡" },
    { personality: "Curious 🧐" },
    { personality: "Friendly 👋" },
    { personality: "Quirky 🎉" },
    { personality: "Loyal 🤝" },
    { personality: "Optimistic 🌞" },
    { personality: "Thoughtful 🤔" },
    { personality: "Empathetic 🤗" },
    { personality: "Humble 🙏" },
    { personality: "Spontaneous 🎭" },
    { personality: "Tech-savvy 📱" },
    { personality: "Caring 🤗" },
    { personality: "Confident 💁‍♂️" },
  ];
  return (
    <div className="start-chat-bg m-auto p-2">
      <div className="space-y-5">
        <h1 className="text-center font-medium text-3xl text-white p-2">
          Start A Chat
        </h1>
        <div className="border-b-2 start-chat-border w-[90%] relative flex justify-center m-auto"></div>
        <div className=" flex flex-col justify-start md:flex md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8 ">
          <div>
            <label
              htmlFor="chatRoomName"
              className="text-base md:text-xl text-white"
            >
              Chat Room Name
            </label>
            <input
              type="text"
              name="chatRoomName"
              id="chatRoomName"
              className="input-bg w-full p-2 md:p-3 border-[1px] md:border-2 border-[#DCDCE5] rounded-2xl focus:border-[#DCDCE5] outline-none placeholder-[#ffffff99] text-white"
              placeholder="Name of chat room e.g ChillZone 🌴"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-base md:text-xl text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="input-bg w-full p-2 md:p-3 border-[1px] md:border-2 border-[#DCDCE5] rounded-2xl focus:border-[#DCDCE5] outline-none placeholder-[#ffffff99] text-white"
              placeholder="Your username e.g ChattyKatty"
            />
          </div>
        </div>
        <div>
          <p className="text-base md:text-xl text-white md:text-center">
            Select Your Gender
          </p>
          <select
            name="gender"
            id=""
            className="input-bg w-full md:w-1/3 block md:m-auto p-2 md:p-3 border-[1px] md:border-2 border-[#DCDCE5] rounded-2xl focus:border-[#DCDCE5] outline-none placeholder-[#ffffff99] text-white"
          >
            <option className="text-black">Pick your gender</option>
            <option value="Male" className=" text-black">
              Male
            </option>
            <option value="Female" className=" text-black">
              Female
            </option>
            <option value="other" className=" text-black">
              Other
            </option>
          </select>
        </div>
      </div>
      <div className="md:mt-8 mt-5 text-white text-center">
        <p className="text-xl">Pick Your Avatar</p>
        <p className="text-sm mb-6">
          To pick an avatar, choose <span className="text-[#FD429C]">3 </span>
          words that <br /> best describe you
        </p>
        <div className="space-x-5 space-y-3 md:w-1/2 m-auto">
          {buttonTexts.map((buttonText, index) => (
            <Buttons btnText={buttonText.personality} key={index} />
          ))}
        </div>
      </div>
      <button className="block m-auto px-4 py-2 md:px-8 md:py-3 my-7 bg-[#ffffff66] text-[#2c1fa3] text-base md:text-xl font-semibold rounded-full">
        Create New Chat
      </button>
    </div>
  );
}

export default StartChat;
