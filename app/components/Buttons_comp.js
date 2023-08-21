import React, { useEffect, useState } from "react";
import { useIdentityContext } from "../lib/identityContext";

function Buttons({ btnText, chatroomName, username, }) {
 
  const {
    personality,
    setPersonality,
    personalitySelected,
    setPersonalitySelected,
    gender
  } = useIdentityContext();
  const [isSelected, setIsSelected] = useState(false);
  const character = btnText.split(" ")[0].toLowerCase();
  const disableBtn = !(chatroomName && username && gender);
 
  const handleSelect = (e) => {
    e.preventDefault();
    if (personality.includes(character)) {
      setPersonality(personality.filter((char) => char !== character));
      setIsSelected(false);
    } else {
      if (personality.length < 4) {
        setPersonality([...personality, character]);
        setIsSelected(true);
      } else if (personality.length === 4) {
        setPersonalitySelected(true);
      }
    }

    console.log(personality);
  };

  return (
    <button
      onClick={handleSelect}
      className={`relative bg-transparent border-2 border-[#DCDCE5] rounded-full px-2 py-1 md:px-4 md:py-2 md:text-[17px] text-sm ${
        disableBtn ? "opacity-30 cursor-not-allowed" : "hover:bg-[#ffffff4d]"
      }  ${isSelected && `bg-[#ffffff4d]`}`}
      disabled={disableBtn}
    >
      {btnText}
    </button>
  );
}

export { Buttons };
