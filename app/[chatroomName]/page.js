import { useRouter } from "next/navigation";
import ChatRoom from "../components/ChatRoom_comp";

export default function Chatroom() {
  const {
    query: { chatroomName },
  } = useRouter();

  return (
    <div>
      <h1>Chatroom: {chatroomName}</h1>
      <ChatRoom/>
    </div>
  );
}
