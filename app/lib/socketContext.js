import { useState } from "react";
import { useContext, useEffect, createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const connectSocket = io("http://localhost:3001");
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (connectSocket) {
      setSocket(connectSocket);
    }

    return () => {
      connectSocket.off;
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};
