import { useState } from "react";
import { useContext, useEffect, createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const connectSocket = io.connect("http://localhost:3001");

  useEffect(() => {
    if (connectSocket) {
      setSocket(connectSocket);
      window.localStorage.setItem("socket", JSON.stringify(connectSocket));
    }
  }, [connectSocket]);
  useEffect(() => {
    if (!connectSocket) {
      setSocket(
        window.localStorage.getItem("socket", JSON.parse(connectSocket))
      );
    }
  }, [connectSocket]);

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
