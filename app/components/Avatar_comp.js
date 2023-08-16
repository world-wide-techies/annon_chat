import Image from "next/image";
import React from "react";

const Avatars = [
  {
    id: 1,
    src: "/assets/avatar/Avatar4.png",
  },
  {
    id: 4,
    src: "/assets/avatar/Avatar1.png",
  },
  {
    id: 2,
    src: "/assets/avatar/Avatar2.png",
  },
  {
    id: 3,
    src: "/assets/avatar/Avatar3.png",
  },
];

function AvatarComponent() {
  return (
    <div className="w-11/12 md:w-7/12 mx-auto mt-10">
      <div className="text-center lg:mt-8 mt-6">
        <h1 className="text-base-white font-lexend leading-7 tracking-normal font-normal">
          Pick Your Avatar
        </h1>
        <p className="text-base-white font-roboto text-xs font-medium leading-4 tracking-[-0.12px]">
          Pick an avatar that matches your vibe
        </p>
      </div>
      <div className="mt-5">
        <div className="w-28 mx-auto border border-base-white rounded-full p-3 text-center bg-white/20">
          <Image
            src="/assets/avatar/Avatar4.png"
            alt="avatar"
            width={90}
            height={90}
          />
        </div>
        <div className="flex gap-2 mt-8">
          {Avatars.map(({ id, src }) => (
            <div key={id} className=" mx-auto rounded-full p-2 bg-white/20">
              <Image src={src} alt="avatar" width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarComponent;
