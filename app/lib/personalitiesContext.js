import { useState } from "react";
import { useContext, createContext } from "react";

export const PersonalityContext = createContext();

export const PersonalityContextProvider = ({ children }) => {
  const [personality, setPersonality] = useState({});

  return (
    <PersonalityContext.Provider
      value={{
        personality,
        setPersonality,
      }}
    >
      {children}
    </PersonalityContext.Provider>
  );
};

export const usePersonalityContext = () => {
  return useContext(PersonalityContext);
};
