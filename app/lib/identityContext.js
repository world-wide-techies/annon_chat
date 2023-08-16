import { useState } from "react";
import { useContext, createContext } from "react";

export const IdentityContext = createContext();

export const IdentityContextProvider = ({ children }) => {
  const [personality, setPersonality] = useState({});

  return (
    <IdentityContext.Provider
      value={{
        personality,
        setPersonality,
      }}
    >
      {children}
    </IdentityContext.Provider>
  );
};

export const usePersonalityContext = () => {
  return useContext(IdentityContext);
};
