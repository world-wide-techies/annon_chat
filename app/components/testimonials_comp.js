import USER1 from "@/public/assets/images/testimonials_img_1.png";
import USER2 from "@/public/assets/images/testimonials_img_2.png";
import Image from "next/image";
import CHECKER from "@/public/assets/images/checker.png";
import CONTAINER from "@/public/assets/images/container.png";
import CONTAINER1 from "@/public/assets/images/container1.png";

function Testimonials() {
  return (
    <>
      <div lassName=" lg:h-[1078px] relative bg-testimonials-bg bg-cover">
        <div className="flex justify-center mx-auto text-center text-white text-[35px] font-medium leading-[54px]">
          <h1 className="mt-[70px]">What Our Users Are Saying!</h1>
        </div>
        <div className="lg:w-[1000px] px-10 flex flex-col space-y-7 justify-center mx-auto mt-[70px]">
          <div className=" md:w-[673px] shadow relative px-3 py-4 self-end chat-bg rounded-[11px] ">
            <div className="w-[11px] h-5 right-[-5px] bottom-[-1px] absolute">
              <Image src={CONTAINER1} alt="" className="w-[11px] h-[20px]  " />
            </div>

            <div className="text-white text-base font-normal leading-tight">
              &quot;AnonChat is a game-changer! I use it for confidential work
              discussions with my team members, and it&apos;s been a breeze. The
              anonymity adds an extra layer of comfort, and we can brainstorm
              ideas without any inhibitions. Plus, the chat disappearing after
              we&apos;re done? Genius! Highly recommend it for anyone looking
              for secure and spontaneous conversations. 🙌&quot;
            </div>
            <div className="self-stretch text-right text-white text-base font-normal leading-tight">
              Sarah N., 23
              <br />
              👩‍💼💻
            </div>
            <div className="pl-2.5 pt-2 justify-end items-center gap-1 flex">
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

          <div className="md:w-[673px] relative self-start  px-3 py-4  bg-white rounded-[11px]">
            <div className="w-[11px] h-5 left-[-3px] bottom-[-1px] absolute">
              <Image src={CONTAINER} alt="" className="w-[11px] h-[20px]  " />
            </div>
            <div className="text-neutral-800 text-base font-normal leading-tight">
              &quot;As a college student, AnonChat has been a lifesaver for
              collaborating on group projects. It&apos;s so easy to create a
              chat room and share the link with my classmates. We can discuss
              our ideas without the pressure of face-to-face interactions, and
              it keeps our conversations focused and efficient. Thanks to
              AnonChat, group projects have become way less stressful!
              🎓💬&quot;
              <br />
            </div>
            <div className="self-stretch text-neutral-800 text-base font-normal leading-tight">
              David K., 20 👨‍🎓📚
              <br />
            </div>
            <div className="pl-2.5 pt-2 ">
              <div className="text-right text-zinc-500 text-[13px] font-normal leading-none">
                14:37
              </div>
            </div>
          </div>

          <div className="md:w-[673px] relative self-end px-3 py-4 chat-bg rounded-[11px] ">
            <div className="w-[11px] h-5 right-[-5px] bottom-[-1px] absolute">
              <Image src={CONTAINER1} alt="" className="w-[11px] h-[20px]  " />
            </div>

            <div className="self-stretch text-white text-base font-normal leading-tight">
              &quot;I love using AnonChat to catch up with my long-distance
              friends. It feels like we&apos;re having a secret rendezvous! 😄
              The anonymous feature lets us share our innermost thoughts without
              any reservations, making our chats more intimate and authentic.
              Plus, the time-limited aspect keeps our conversations fresh and
              exciting. AnonChat has become our go-to platform for meaningful
              heart-to-heart talks. ❤️🗣️&quot;
            </div>
            <div className="self-stretch text-right text-white text-base font-normal leading-tight">
              Lisa M., 27
              <br />
              👩‍👧‍👦💕
            </div>
            <div className="pl-2.5 pt-2 justify-end items-center gap-1 flex">
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
        <div className="flex mx-auto  w-[434px] h-[434px] left-[-20px] bottom-0 lg:absolute">
          <Image src={USER1} alt=""  />
        </div>

        <div className="hidden lg:flex w-[558px] h-[558px] right-[-62px]  bottom-[-110px] absolute">
          <Image src={USER2} alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
