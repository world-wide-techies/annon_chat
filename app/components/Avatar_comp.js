"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useIdentityContext } from "../lib/identityContext";
import { getRandomPNGUrl } from "../lib/randomPngUrl";

function AvatarComponent() {
  const { gender, setGender } = useIdentityContext();
  let { personality, setPersonality } = useIdentityContext();

  // useEffect(() => {
  //   // console.log(getRandomPNGUrl(personality[0]));
  //   // console.log(getRandomPNGUrl(personality[1]));
  //   // console.log(getRandomPNGUrl(personality[2]));
  //   // console.log(getRandomPNGUrl(personality[3]));
  // }, [personality]);

  // console.log(getRandomPNGUrl(personality[0]));
  // console.log(getRandomPNGUrl(personality[1]));
  // console.log(getRandomPNGUrl(personality[2]));
  // console.log(getRandomPNGUrl(personality[3]));

  const Avatars = [
    {
      id: 1,
      src: getRandomPNGUrl(personality[1]),
    },
    {
      id: 2,
      src: getRandomPNGUrl(personality[1]),
    },
    {
      id: 3,
      src: getRandomPNGUrl(personality[2]),
    },
    {
      id: 4,
      src: getRandomPNGUrl(personality[3]),
    },
  ];

  const [isSelected, setIsSelected] = useState("/assets/avatar/Avatar4.png");

  const handleClick = (src) => {
    setIsSelected(src);
  };
  return (
    <div className="w-11/12 md:w-7/12 mx-auto mt-10">
      <div className="text-center lg:mt-8 mt-6">
        <p className="text-base-white font-lexend leading-7 tracking-normal font-normal text-xl">
          Pick Your Avatar
        </p>
        <p className="text-base-white font-roboto text-xs font-medium leading-4 tracking-[-0.12px]">
          Pick an avatar that matches your vibe
        </p>
      </div>
      <div className="mt-5">
        <div className="w-28 mx-auto border border-base-white rounded-full p-3 text-center bg-white/20">
          {isSelected ? (
            <Image src={isSelected} alt="avatar" width={90} height={90} />
          ) : (
            <Image
              src="/assets/avatar/Avatar4.png"
              alt="avatar"
              width={90}
              height={90}
            />
          )}
        </div>
        <div className="flex gap-2 mt-8">
          {Avatars.map(({ id, src }) => (
            <button
              type="button"
              onClick={() => handleClick(src)}
              key={id}
              className={
                src === isSelected
                  ? "border border-[#FD429C] mx-auto rounded-full p-1"
                  : "mx-auto rounded-full p-1"
              }
            >
              <div
                className={
                  src === isSelected
                    ? "border border-base-white mx-auto rounded-full p-2 bg-white/20"
                    : "mx-auto rounded-full p-2 bg-white/20"
                }
              >
                <Image src={src} alt="avatar" width={60} height={60} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarComponent;
