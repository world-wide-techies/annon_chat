"use client";
import { useRouter } from "next/navigation";
import ChatRoom from "../components/ChatRoom_comp";
import { useSocketContext } from "../lib/socketContext";
import JoinChatComp from "../components/JoinChat_comp";

export default function Chatroom() {
  const { showChatRoom, setShowChatRoom } = useSocketContext();
  return <div>{showChatRoom ? <ChatRoom /> : <JoinChatComp />}</div>;
}
