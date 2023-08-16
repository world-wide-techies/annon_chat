import Image from "next/image";
import React from "react";

const Avatars = [
  {
    id: 1,
    src: "/assets/images/Avatar4.png",
  },
  {
    id: 4,
    src: "/assets/images/Avatar1.png",
  },
  {
    id: 2,
    src: "/assets/images/Avatar2.png",
  },
  {
    id: 3,
    src: "/assets/images/Avatar3.png",
  },
];

function AvatarComponent() {
  return (
    <div>
      <div>
        <p>Pick Your Avatar</p>
        <p>Pick an Avatar that matches your vibe</p>
      </div>
      <div>
        <div className="border border-base-white rounded-full p-3">
          <Image
            src="/assets/images/Avatar4.png"
            alt="avatar"
            width={300}
            height={300}
          />
        </div>
        <div>
          {Avatars.map(({ id, src }) => (
            <div key={id}>
              <Image src={src} alt="avatar" width={300} height={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarComponent;
