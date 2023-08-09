import React from "react";
import Image from "next/image";
import featuresImg1 from "@/public/assets/images/features_img_1.png";
import featuresImg2 from "@/public/assets/images/features_img_2.png";
import featuresImg3 from "@/public/assets/images/features_img_3.png";
import featuresImg4 from "@/public/assets/images/features_img_4.png";
import featuresImg5 from "@/public/assets/images/features_img_5.png";



function Features(){
return (
  <div>
    <h2 className="text-center text-21xl font-medium text-transparent bg-clip-text bg-gradient-to-t from-[#F24F9D] to-[#5F4AFF]">
      Why Choose AnnonChat!
    </h2>
    <div className="flex flex-row justify-center gap-5 mt-4">
      <div className="text-center w-1/4 bg-gradient-radial bg-gradient-to-b from-[#FFF9C7] via-[#FFE4F8] to-[#FFFFFF] shadow-md rounded-md">
        <div className="flex justify-center">
          <Image src={featuresImg1} alt="" />
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#755BDF] to-[#2C1FA3] pb-3">
          <p className="text-5xl font-medium">Anonymous Chat</p>
          <p className="text-[18px]">
            Chat without revealing your identity, maintaining complete anonymity
          </p>
        </div>
      </div>
      <div className="text-center w-1/4 bg-gradient-radial bg-gradient-to-b from-[#FFF9C7] via-[#FFE4F8] to-[#FFFFFF] shadow-md rounded-md">
        <div className="flex justify-center">
          <Image src={featuresImg2} alt="" />
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#755BDF] to-[#2C1FA3] pb-3">
          <p className="text-5xl font-medium">Instant Access</p>
          <p className="text-[18px]">
            Create or join chat rooms with a simple link – no sign-ups required!
          </p>
        </div>
      </div>
      <div className="text-center w-1/4 bg-gradient-radial bg-gradient-to-b from-[#FFF9C7] via-[#FFE4F8] to-[#FFFFFF] shadow-md rounded-md">
        <div className="flex justify-center">
          <Image src={featuresImg3} alt="" />
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#755BDF] to-[#2C1FA3] pb-3">
          <p className="text-5xl font-medium">Cross-Platform Support</p>
          <p className="text-[18px]">
            Seamless experience across all devices - desktop, tablet, and mobile
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-center my-5 gap-5">
      <div className="text-center w-1/4 bg-gradient-radial bg-gradient-to-b from-[#FFF9C7] via-[#FFE4F8] to-[#FFFFFF] shadow-md rounded-md">
        <div className="flex justify-center">
          <Image src={featuresImg5} alt="" />
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#755BDF] to-[#2C1FA3] pb-3">
          <p className="text-5xl font-medium">End-to-End Encryption</p>
          <p className="text-[18px]">
            Your conversations are secured with end-to-end encryption for
            maximum privacy
          </p>
        </div>
      </div>
      <div className="text-center w-1/4 bg-gradient-radial bg-gradient-to-b from-[#FFF9C7] via-[#FFE4F8] to-[#FFFFFF] shadow-md rounded-md">
        <div className="flex justify-center">
          <Image src={featuresImg4} alt="" />
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#755BDF] to-[#2C1FA3] pb-3">
          <p className="text-5xl font-medium">Time-Limited Chats</p>
          <p className="text-[18px]">
            Chats automatically end when all participants leave for added
            security
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Features;
