import React from "react";
import USER1 from "@/public/assets/images/testimonials_img_1.png";
import USER2 from "@/public/assets/images/testimonials_img_2.png";
import Image from "next/image";
import CHECKER from "@/public/assets/images/checker.png";
import CONTAINER from "@/public/assets/images/container.png";

const Testimonials = () => {
  return (
    <>
      <div className="w-[1440px] h-[1078px] relative bg-gradient-to-b from-indigo-500 to-indigo-800">
        <div className="w-[641.11px] h-[930.76px] left-[123.95px] top-[-29.76px] absolute"></div>
        <div className="h-[730px] py-2 left-[205px] top-[227px] absolute flex-col justify-start items-start gap-12 inline-flex">
          <div className="self-stretch h-[195px] flex-col justify-center items-end gap-2 flex">
            <div className="self-stretch shadow justify-end items-center inline-flex">
              <div className="w-[673px] self-stretch px-3 py-4 bg-gradient-to-r from-fuchsia-800 to-pink-500 rounded-[11px] flex-col justify-start items-end inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-tight">
                  &quot;AnonChat is a game-changer! I use it for confidential
                  work discussions with my team members, and it&apos;s been a
                  breeze. The anonymity adds an extra layer of comfort, and we
                  can brainstorm ideas without any inhibitions. Plus, the chat
                  disappearing after we&apos;re done? Genius! Highly recommend
                  it for anyone looking for secure and spontaneous
                  conversations. 🙌&quot;
                </div>
                <div className="self-stretch text-right text-white text-base font-normal leading-tight">
                  Sarah N., 23
                  <br />
                  👩‍💼💻
                </div>
                <div className="pl-2.5 pt-2 justify-end items-center gap-1 inline-flex">
                  <div className="text-white text-[13px] font-normal leading-none">
                    14:37
                  </div>
                  <div className="w-[15px] h-3.5 relative opacity-80">
                    <Image
                      src={CHECKER}
                      alt=""
                      className="w-4 h-[9.50px] left-[-0.22px] top-[1.74px] absolute"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[0.10px] h-5 flex-col justify-end items-start inline-flex">
                <div className="w-[11px] h-5 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[216px] flex-col justify-center items-start gap-2 flex">
            <div className="w-[673px] shadow justify-start items-end inline-flex">
             
              <div className="grow shrink basis-0 self-stretch px-3 py-1.5 bg-white rounded-[11px] flex-col justify-end items-end inline-flex">
                <div className="self-stretch text-neutral-800 text-base font-normal leading-tight">
                  "As a college student, AnonChat has been a lifesaver for
                  collaborating on group projects. It's so easy to create a chat
                  room and share the link with my classmates. We can discuss our
                  ideas without the pressure of face-to-face interactions, and
                  it keeps our conversations focused and efficient. Thanks to
                  AnonChat, group projects have become way less stressful! 🎓💬"
                  <br />
                </div>
                <div className="self-stretch text-neutral-800 text-base font-normal leading-tight">
                  David K., 20  👨‍🎓📚
                  <br />
                </div>
                <div className="pl-2.5 pt-2 justify-end items-end inline-flex">
                  <div className="text-zinc-500 text-[13px] font-normal leading-none">
                    14:37
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[207px] flex-col justify-center items-end gap-2 flex">
            <div className="w-[673px] shadow justify-end items-center inline-flex">
              <div className="w-[0.10px] h-5 flex-col justify-end items-start inline-flex">
                <div className="w-[11px] h-5 relative" />
              </div>
              <div className="grow shrink basis-0 self-stretch px-3 py-1.5 bg-gradient-to-r from-fuchsia-800 to-pink-500 rounded-[11px] flex-col justify-end items-end gap-4 inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-tight">
                  "I love using AnonChat to catch up with my long-distance
                  friends. It feels like we're having a secret rendezvous! 😄
                  The anonymous feature lets us share our innermost thoughts
                  without any reservations, making our chats more intimate and
                  authentic. Plus, the time-limited aspect keeps our
                  conversations fresh and exciting. AnonChat has become our
                  go-to platform for meaningful heart-to-heart talks. ❤️🗣️"
                </div>
                <div className="self-stretch text-white text-base font-normal leading-tight">
                  Lisa M., 27  👩‍👧‍👦💕
                </div>
                <div className="pl-2.5 pt-2 justify-end items-center gap-1 inline-flex">
                  <div className="text-white text-[13px] font-normal leading-none">
                    14:37
                  </div>
                  <div className="w-[15px] h-3.5 relative opacity-80">
                    <Image
                      src={CHECKER}
                      alt=""
                      className="w-4 h-[9.50px] left-[-0.22px] top-[1.74px] absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[434px] h-[434px] left-[-66px] top-[642px] absolute">
          <Image
            src={USER1}
            alt=""
            className="w-[434px] h-[434px] left-[66px] top-[2px] absolute"
          />
        </div>
        <div className="w-[887px] left-[276px] top-[100px] absolute text-center text-white text-5xl font-medium leading-[54px]">
          What Our Users Are Saying!
        </div>
        <div className="w-[558px] h-[558px] left-[944px] top-[523px] absolute">
          <Image
            src={USER2}
            alt=""
            className="w-[500px] h-[558px] left-0 top-[110px] absolute"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
