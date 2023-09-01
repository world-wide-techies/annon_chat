import { useState } from "react";
import { useContext, createContext } from "react";

export const IdentityContext = createContext();

export const IdentityContextProvider = ({ children }) => {
  const [personality, setPersonality] = useState([]);
  const [gender, setGender] = useState(false);
  const [personalitySelected, setPersonalitySelected] = useState(false);
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [chatroomName, setChatroomName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [username, setUsername] = useState("");

  return (
    <IdentityContext.Provider
      value={{
        personality,
        setPersonality,
        gender,
        setGender,
        personalitySelected,
        setPersonalitySelected,
        chatroomName,
        setChatroomName,
        username,
        setUsername,
        selectedAvatar,
        setSelectedAvatar,
      }}
    >
      {children}
    </IdentityContext.Provider>
  );
};

export const useIdentityContext = () => {
  return useContext(IdentityContext);
};
