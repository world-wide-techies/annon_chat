import React, { useEffect, useState } from "react";
import { useIdentityContext } from "../lib/identityContext";

function Buttons({ btnText }) {
  const {
    personality,
    setPersonality,
    personalitySelected,
    setPersonalitySelected,
  } = useIdentityContext();
  const [isSelected, setIsSelected] = useState(false);
  const character = btnText.split(" ")[0].toLowerCase();
  const [personalityS, setPersonalityS] = useState(false);

  useEffect(() => {
    console.log(personalityS);
  }, [personalityS]);

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
      className={`relative border-2 border-[#DCDCE5] rounded-full px-2 py-1 md:px-4 md:py-2 hover:bg-[#ffffff4d] ${
        isSelected && `bg-[#ffffff4d]`
      } md:text-[17px] text-sm  `}
    >
      {btnText}
    </button>
  );
}

export { Buttons };
