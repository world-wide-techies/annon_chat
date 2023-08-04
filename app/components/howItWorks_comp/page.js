import Image from "next/image";
import React from "react";

const steps = [
  {
    id: "1",
    title: "Create a Chill Chat Room ",
    titleIcon: "🌐👥",
    description:
      "It's easy-peasy! Begin by crafting your exclusive chat room, giving it a slick name to set the vibe. This is your personal space to dive into candid convos, free from any prying eyes. Just tap that 'Create Room' button, and you're on your way to digital sanctuary! 🎉",
  },
  {
    id: "2",
    title: "Slide the Link",
    titleIcon: " 📲💨",
    description:
      "Now comes the smooth part! Grab that unique chat link you just created and send it straight to the person you wanna vibe with. Whether it's your BFF, a colleague, or that new acquaintance, they're in for a mystery treat! Slide that link like a pro, and let the convo magic begin. 💬✨",
  },
  {
    id: "3",
    title: "Connect Incognito-Style ",
    titleIcon: "🕵️‍♂️🤐",
    description:
      "Once your chat buddy taps that link, it's off to an incognito rendezvous! No names, no formalities, just raw, authentic chatter. You're both free to express yourselves without any labels. Embrace the thrill of anonymity and dive deep into those real talks! 🔥🗣️",
  },
  {
    id: "4",
    title: "Chat, Laugh, and Share! ",
    titleIcon: "🎭😂",
    description:
      "Now the fun part - talk it up, laugh it out, and share your thoughts like you're on top of the world! Chat about life, dreams, or simply what's popping'. It's your secret space to explore without a care. Let the good vibes flow, and remember, it's just you two in this exclusive zone. 🎶💃",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full bg-gray-300 ">
      <div className="grid grid-cols-7">
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src="/assets/images/how_it_works_img_1.png"
            alt="img"
            width={400}
            height={400}
          />
        </div>

        <div className="col-span-3 drop-shadow-2xl bg-white ">
          <div className=" p-10 ">
            <p className="text-center text-29xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#F24F9D] to-[#5F4AFF]">
              How It Works!
            </p>
            <div className="mt-4">
              {steps.map(({ description, title, id, titleIcon }) => (
                <div key={id} className="grid grid-cols-6 gap-4 mt-6">
                  <div className="col-span-1 ">
                  <div className="rounded-full border border-[#755BDF] w-20 h-20">
                  <p className="text-45xl text-transparent bg-clip-text bg-gradient-to-b from-[#F24F9D] to-[#5F4AFF]">
                    {id}
                  </p>
                  
                  </div>
                  </div>
                  <div className="col-span-5">
                    <div className="flex items-center">
                      <p className="text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-[#F24F9D] to-[#5F4AFF]">
                        {title}{" "}
                      </p>
                      <span>{titleIcon}</span>
                    </div>
                    <p className="text-sm text-neutral-600-light">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-end">
            <Image
              src="/assets/images/how_it_works_img_3.png"
              alt="img"
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <Image
            src="/assets/images/how_it_works_img_1.png"
            alt="img"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
