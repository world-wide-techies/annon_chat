"use client";
import { useRouter } from "next/navigation";
import ChatRoom from "../components/ChatRoom_comp";
import { useSocketContext } from "../lib/socketContext";
import JoinChatComp from "../components/JoinChat_comp";
import { useIdentityContext } from "../lib/identityContext";
import { useEffect } from "react";

export default function Chatroom() {
  const { showChatRoom, setShowChatRoom, roomSize } = useSocketContext();
  const { chatroomName, setChatroomName } = useIdentityContext();

  useEffect(() => {
    if (chatroomName && roomSize < 2) setShowChatRoom(true);
  }, [chatroomName, setShowChatRoom, roomSize]);

  return <div>{showChatRoom ? <ChatRoom /> : <JoinChatComp />}</div>;
}
