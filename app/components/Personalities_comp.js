import React from "react";
import { Buttons } from "./Buttons_comp";

function Personaliies({ chatroomName, username, gender }) {
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
    { personality: "Humble 🙏" },
    { personality: "Spontaneous 🎭" },
    { personality: "Tech-savvy 📱" },
    { personality: "Confident 💁‍♂️" },
    { personality: "Outgoing 🎉" },
  ];
  return (
    <div>
      <div className="md:mt-8 mt-5 text-white text-center">
        <p className="text-xl">Pick Your Avatar</p>
        <p className="text-sm mb-2 md:mb-6">
          To pick an avatar, choose <span className="text-[#FD429C]">3 </span>
          words that <br /> best describe you
        </p>
        <div className="space-x-3 space-y-2 md:space-x-5 md:space-y-3 w-full">
          {buttonTexts.map((buttonText, index) => (
            <Buttons btnText={buttonText.personality} key={index} chatroomName={chatroomName} gender={gender} username = {username} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personaliies;
