import { useState } from "react";
import { useContext, createContext } from "react";

export const IdentityContext = createContext();

export const IdentityContextProvider = ({ children }) => {
  const [personality, setPersonality] = useState([]);
  const [gender, setGender] = useState([]);
  const [personalitySelected, setPersonalitySelected] = useState(false)

  return (
    <IdentityContext.Provider
      value={{
        personality,
        setPersonality,
        gender,
        setGender,
        personalitySelected, 
        setPersonalitySelected
      }}
    >
      {children}
    </IdentityContext.Provider>
  );
};

export const useIdentityContext = () => {
  return useContext(IdentityContext);
};
