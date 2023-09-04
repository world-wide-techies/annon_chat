import { useState } from "react";
import { useContext, useEffect, createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    newSocket.on("connect", () => {
      setRoomId(newSocket.id);
    });
    setSocket(newSocket);
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        roomId,
        room,
        setRoom,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};
