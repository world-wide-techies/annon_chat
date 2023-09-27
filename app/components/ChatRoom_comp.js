import React, { useEffect, useRef, useState } from "react";
import ChatRoomNav from "./ChatRoomNav_comp";
import Image from "next/image";
import { useIdentityContext } from "../lib/identityContext";
import { useSocketContext } from "../lib/socketContext";

import IsTyping from "./IsTyping_comp";
import { formattedTime } from "../lib/formattedTime";

function ChatRoom() {
  const { socket, roomSize, room } = useSocketContext();
  const { username } = useIdentityContext();
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userTyping, setUserTyping] = useState({});
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  const selectedAvatar =
    window && window.localStorage.getItem("selectedAvatar");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket?.on("user_typing", (data) => {
      if (data.isTyping && data.username !== username) {
        setUserTyping(data);
        setIsTyping(true);
      } else if (!data.isTyping && data.username !== username) {
        setUserTyping(false);
      }
    });

    socket?.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket?.off("user_typing");
      socket?.off("receive_message");
    };
  }, [socket, currentMessage, username, userTyping]);

  useEffect(() => {
    resizeTextArea();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessage, messageList]);

  const handleChange = (e) => {
    setCurrentMessage(e.target.value);

    socket?.emit("typing", {
      room,
      message: e.target.value,
      author: username,
      avatar: selectedAvatar,
      isTyping: true,
    });
  };

  const handleBlur = () => {
    socket?.emit("typing", {
      room,
      author: username,
      avatar: selectedAvatar,
      isTyping: false,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (currentMessage !== "") {
      const messageData = {
        room,
        author: username,
        message: currentMessage,
        avatar: selectedAvatar,
        time: formattedTime(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");

      socket.emit("typing", {
        room,
        author: username,
        avatar: selectedAvatar,
        isTyping: false, // User is not typing after sending the message
      });
    }
  };

  return (
    <section className=" w-full h-screen bg-hero-bg bg-cover mx-auto max-w-screen-2xl ">
      <ChatRoomNav selectedAvatar={selectedAvatar} />
      <div className="flex flex-col items-stretch lg:mx-24 bg-white/25 p-4 border-b-2 border-x-2 border-white/25 rounded-b-3xl h-[90vh] md:h-[88%]">
        <div className="h-[90%]">
          {messageList.length === 0 ? (
            <div>
              <div className="w-full flex space-x-2 items-center justify-center text-gray-300">
                <div className="w-3/12 md:w-4/12 lg:w-5/12 border-t border-gray-300"></div>
                <p className="text-[9px] lg:text-xs">
                  This is the start of your conversation
                </p>
                <div className="w-3/12 md:w-4/12 lg:w-5/12 border-t border-gray-300"></div>
              </div>
              <div className="px-3 my-6 rounded-3xl border border-gray-300 max-w-lg text-white mx-auto py-2 text-xs text-center">
                Chats are end-to-end encrypted. No one outside of this chat, not
                even AnonChat, can read them. Your username and avatar are
                shared with each other though.
              </div>
            </div>
          ) : (
            <div
              className="overflow-y-auto custom-scroll"
              style={{ height: "calc(100vh - 230px)" }}
            >
              {messageList.map((messageContent, index) => (
                <div key={index} className="w-full flex flex-col">
                  {messageContent.author !== username ? (
                    <div className="w-8/12 md:w-6/12 grid grid-cols-12 items-start gap-3 my-4">
                      <div className="col-span-2 md:col-span-1 rounded-full mx-auto">
                        <Image
                          src={messageContent.avatar}
                          alt="profile img"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                      <div className="col-span-10 md:col-span-11 text-white font-roboto">
                        <p className="text-sm">{messageContent.author}</p>
                        <div className="max-w-max mr-auto h-auto text-sm my-1 p-2 rounded-b-lg rounded-tr-lg bg-white text-[#755BDF] break-words">
                          {messageContent.message}
                        </div>
                        <p className="text-xs text-gray-300">
                          {messageContent.time}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-8/12 md:w-6/12 grid grid-cols-12 grid-flow-col items-start justify-end self-end gap-3 my-2 mr-4">
                      <div className="col-span-10 md:col-span-11 text-white font-roboto">
                        <div className="max-w-max ml-auto h-auto text-sm my-1 p-2 rounded-b-lg rounded-tl-lg chat-bg text-white break-words">
                          {messageContent.message}
                        </div>
                        <p className="text-xs text-gray-300 text-right">
                          {messageContent.time}
                        </p>
                      </div>
                      <div className="col-span-2 md:col-span-1 rounded-full">
                        <Image
                          src={selectedAvatar}
                          alt="profile img"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div ref={messagesEndRef}></div>
            </div>
          )}

          {isTyping && userTyping.isTyping && (
            <IsTyping avatar={userTyping.avatar} userName={userTyping.author} />
          )}
        </div>
        <form
          onSubmit={sendMessage}
          className="relative max-h-28 z-10 flex items-end space-x-6 "
        >
          <div className="flex items-center justify-between w-11/12 rounded-3xl border px-4 py-1.5">
            <textarea
              ref={textAreaRef}
              rows={1}
              placeholder="Send a message"
              className="max-h-24 w-full text-white bg-transparent placeholder:text-gray-300 resize-none overflow-y-auto custom-scroll outline-none"
              onChange={handleChange}
              onBlur={handleBlur}
              value={currentMessage}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
            ></textarea>
            {/* 
      
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
                  </div> */}
          </div>
          <button
            className="bg-white px-6 py-1.5 rounded-3xl text-[#755BDF]  font-lexend"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ChatRoom;
