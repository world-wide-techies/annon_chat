import { useRouter } from "next/navigation";

export default function Chatroom() {
  const {
    query: { chatroomName },
  } = useRouter();

  return (
    <div>
      <h1>Chatroom: {chatroomName}</h1>
    </div>
  );
}
