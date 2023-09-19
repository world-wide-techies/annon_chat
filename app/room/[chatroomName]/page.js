"use client";
import { useRouter } from "next/navigation";
import ChatRoom from "../../components/ChatRoom_comp";
import { useSocketContext } from "../../lib/socketContext";
import JoinChatComp from "../../components/JoinChat_comp";
import { useIdentityContext } from "../../lib/identityContext";
import { useEffect, useState } from "react";

export default function Chatroom() {
  const { showChatRoom, setShowChatRoom, roomSize } = useSocketContext();
  const { chatroomName, setChatroomName } = useIdentityContext();
  const [joinChatRoom, setJoinChatRoom] = useState(false);
  const persistedRoomName = sessionStorage.getItem("chatroomName");

  useEffect(() => {
    if (chatroomName) {
      setShowChatRoom(true);
      setJoinChatRoom(false);
    } else {
      setJoinChatRoom(true);
      setShowChatRoom(false);
    }
  }, [chatroomName, setShowChatRoom, persistedRoomName]);

  return (
    <div>
      {showChatRoom && <ChatRoom />}

      {joinChatRoom && <JoinChatComp />}
    </div>
  );
}