import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-alpha-white-90 shadow-2xl">
      <div className="w-full md:px-12 px-6 flex items-center justify-between font-roboto text-sm font-semibold mt-10 features-text-color">
        <div className="leading-5 text-center md:text-left">
          © {new Date().getFullYear()} AnonChat. All rights reserved.
        </div>

        <div className="flex items-center justify-center leading-5">
          <div className="hidden md:flex space-x-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
          <div className="-mt-8 md:-ml-8 mr-0 ">
            <Image
              src="/assets/images/footer_img_1.png"
              alt="hand img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;