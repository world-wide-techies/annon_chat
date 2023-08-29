import React, { useEffect, useState } from "react";
import ChatRoomNav from "./ChatRoomNav_comp";
import Image from "next/image";
import { useIdentityContext } from "../lib/identityContext";
import { useSocketContext } from "../lib/socketContext";

const chats = [
  {
    name: "Sweettee",
    avatar: "/assets/avatars/chill/chillFemale_1.png",
    message: "Hi there",
    timeSent: "2mins ago",
    isOwnerChatting: false,
  },
];

function ChatRoom() {
  const { gender, setGender } = useIdentityContext();
  const { socket } = useSocketContext();
  const { chatroomName, setChatroomName } = useIdentityContext();
  const { username, setUsername } = useIdentityContext();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        room: chatroomName,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    console.log(socket);
    socket?.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <section className=" w-full h-screen bg-hero-bg bg-cover mx-auto ">
      <ChatRoomNav />
      <div className="flex flex-col items-stretch mx-24 bg-white/25 p-4 border-b-2 border-x-2 border-white/25 rounded-b-3xl h-5/6">
        <div className="h-[90%]">
          {chats.length === 0 ? (
            <div className="">
              <div className="w-full flex space-x-2 items-center text-gray-300">
                <div className="w-5/12 border-t border-gray-300"></div>
                <p className="text-xs">
                  This is the start of your conversation
                </p>
                <div className="w-5/12 border-t border-gray-300"></div>
              </div>
              <div className="my-6 rounded-3xl border border-gray-300 max-w-lg text-white mx-auto py-2 text-xs text-center">
                Chats are end-to-end encrypted . No one outside of this chat,
                not even AnonChat, can read them. Your username and avatar is
                shared with each other though
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col">
              <div className="flex space-x-4 items-start">
                <div className=" rounded-full">
                  <Image
                    src="/assets/avatars/spontaneous/spontaneousFemale_3.png"
                    alt="profile img"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div className="text-white font-roboto">
                  <p className="text-sm">SpicyTee</p>
                  <div className="w-auto text-sm my-1 p-2 rounded-b-lg rounded-tr-lg bg-white text-[#755BDF]">
                    Hey Olivia, can you please review the latest design when you
                    can?
                  </div>
                  <p className="text-xs text-gray-300">2mins ago</p>
                </div>
              </div>
              <div className="flex space-x-4 items-start my-4">
                <div className=" rounded-full">
                  <Image
                    src="/assets/avatars/spontaneous/spontaneousFemale_3.png"
                    alt="profile img"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div className="text-white font-roboto">
                  <p className="text-sm">SpicyTee</p>
                  <div className="w-auto text-sm my-1 p-2 rounded-b-lg rounded-tr-lg bg-white text-[#755BDF]">
                    Hey Olivia, can you please review the latest design when you
                    can?
                  </div>
                  <p className="text-xs text-gray-300">2mins ago</p>
                </div>
              </div>

              <div className="flex space-x-4 items-start self-end my-2">
                <div className="text-white font-roboto">
                  <p className="text-sm text-right">Didi</p>
                  <div className="w-auto text-sm my-1 p-2 rounded-b-lg rounded-tl-lg chat-bg text-white">
                    Hey hey can?
                  </div>
                  <p className="text-xs text-gray-300 text-right">2mins ago</p>
                </div>
                <div className=" rounded-full">
                  <Image
                    src="/assets/avatars/friendly/friendlyFemale_1.png"
                    alt="profile img"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex space-x-4 items-start self-end my-2">
                <div className="text-white font-roboto">
                  <p className="text-sm text-right">Didi</p>
                  <div className="w-auto text-sm my-1 p-2 rounded-b-lg rounded-tl-lg chat-bg text-white">
                    Hey hey
                  </div>
                  <p className="text-xs text-gray-300 text-right">2mins ago</p>
                </div>
                <div className=" rounded-full">
                  <Image
                    src="/assets/avatars/friendly/friendlyFemale_1.png"
                    alt="profile img"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex space-x-4 items-start self-end my-2">
                <div className="text-white font-roboto">
                  <p className="text-sm text-right">Didi</p>
                  <div className="w-auto text-sm my-1 p-2 rounded-b-lg rounded-tl-lg chat-bg text-white">
                    You there?
                  </div>
                  <p className="text-xs text-gray-300 text-right">2mins ago</p>
                </div>
                <div className=" rounded-full">
                  <Image
                    src="/assets/avatars/friendly/friendlyFemale_1.png"
                    alt="profile img"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-end space-x-6">
          <div className="flex items-center justify-between w-11/12 rounded-3xl border px-4 py-1.5">
            <input
              onChange={(e) => setCurrentMessage(e.target.value)}
              type="text"
              placeholder="Send a message"
              className="w-full focus:outline-none text-white bg-transparent placeholder:text-gray-300"
            />
            <div>
              <button className="text-[#755BDF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffff"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-smile"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={sendMessage}
            className="bg-white px-6 py-1.5 rounded-3xl text-[#755BDF]  font-lexend"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatRoom;
