import { useState } from "react";
import { useContext, useEffect, createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomSize, setRoomSize] = useState(1);
  const [showChatRoom, setShowChatRoom] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");

    if (!roomId) setRoomId(newSocket?.id.substring(0, 10));
    console.log(roomId);

    setSocket(newSocket);
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        roomId,
        room,
        setRoom,
        roomSize,
        setRoomSize,
        showChatRoom,
        setShowChatRoom,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};
