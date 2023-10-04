import React from "react";
import Image from "next/image";
import featuresImg1 from "../../public/assets/images/features_img_1.png";
import featuresImg2 from "../../public/assets/images/features_img_2.png";
import featuresImg3 from "../../public/assets/images/features_img_3.png";
import featuresImg4 from "../../public/assets/images/features_img_4.png";
import featuresImg5 from "../../public/assets/images/features_img_5.png";

function Features() {
  return (
    <div className="bg-white py-6">
      <h2 className="text-center text-3xl md:text-4xl font-medium heading-text-color mb-6">
        Why Choose AnnonChat!
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-2 p-5 md:p-0">
        <div className="bg-custom-gradient text-center md:w-1/4 shadow-md rounded-md">
          <div className="flex justify-center pointer-events-none">
            <Image src={featuresImg1} alt="featured image" />
          </div>
          <div className="features-text-color pb-3">
            <p className="text-3xl font-medium">Anonymous Chat</p>
            <p className="text-[18px]">
              Chat without revealing your identity, maintaining complete
              anonymity
            </p>
          </div>
        </div>
        <div className="text-center md:w-1/4 bg-custom-gradient shadow-md rounded-md">
          <div className="flex justify-center pointer-events-none">
            <Image src={featuresImg2} alt="featured image" />
          </div>
          <div className="features-text-color pb-3">
            <p className="text-3xl font-medium">Instant Access</p>
            <p className="text-[18px]">
              Create or join chat rooms with a simple link – no sign-ups
              required!
            </p>
          </div>
        </div>
        <div className="text-center md:w-1/4 bg-custom-gradient shadow-md rounded-md">
          <div className="flex justify-center pointer-events-none">
            <Image src={featuresImg3} alt="featured image" />
          </div>
          <div className="features-text-color pb-3">
            <p className="text-3xl font-medium">Cross-Platform Support</p>
            <p className="text-[18px]">
              Seamless experience across all devices-desktop, tablet, and mobile
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:my-5 gap-5 p-5">
        <div className="text-center md:w-1/4 bg-custom-gradient shadow-md rounded-md">
          <div className="flex justify-center pointer-events-none">
            <Image src={featuresImg5} alt="featured image" />
          </div>
          <div className="features-text-color pb-3">
            <p className="text-3xl font-medium">End-to-End Encryption</p>
            <p className="text-[18px]">
              Your conversations are secured with end-to-end encryption for
              maximum privacy
            </p>
          </div>
        </div>
        <div className="text-center md:w-1/4 bg-custom-gradient shadow-md rounded-md">
          <div className="flex justify-center pointer-events-none">
            <Image src={featuresImg4} alt="featured image" />
          </div>
          <div className="features-text-color pb-3">
            <p className="text-3xl font-medium">Time-Limited Chats</p>
            <p className="text-[18px]">
              Chats automatically end when all participants leave for added
              security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
