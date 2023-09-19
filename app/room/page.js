"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ChatRoom from "../components/ChatRoom_comp";
import { useSocketContext } from "../lib/socketContext";
import JoinChatComp from "../components/JoinChat_comp";
import { useIdentityContext } from "../lib/identityContext";
import { useEffect, useState } from "react";

export default function Chatroom() {
  const { showChatRoom, setShowChatRoom, roomSize } = useSocketContext();
  const { chatroomName, setChatroomName } = useIdentityContext();
  const [joinChatRoom, setJoinChatRoom] = useState(false);

  useEffect(() => {
    if (chatroomName) {
      setShowChatRoom(true);
      setJoinChatRoom(false);
    } else {
      setJoinChatRoom(true);
      setShowChatRoom(false);
    }
  }, [chatroomName, setShowChatRoom]);

  return (
    <>
      <div>
        {showChatRoom && <ChatRoom />}

        {joinChatRoom && <JoinChatComp />}
      </div>
    </>
  );
}
