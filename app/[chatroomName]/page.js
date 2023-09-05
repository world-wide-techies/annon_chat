"use client";
import { useRouter } from "next/navigation";
import ChatRoom from "../components/ChatRoom_comp";
import { useSocketContext } from "../lib/socketContext";
import JoinChatComp from "../components/JoinChat_comp";

export default function Chatroom() {
  const { showChatRoom, setShowChatRoom } = useSocketContext();
  const { chatroomName, setChatroomName } = useidentityContext();

  useEffect(() => {
    if (chatroomName) setShowChatRoom(true);
  }, [chatroomName]);

  return <div>{showChatRoom ? <ChatRoom /> : <JoinChatComp />}</div>;
}
