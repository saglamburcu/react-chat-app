import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { message: "Message 1" },
    { message: "Message 2" }
  ]);

  const values = {
    messages,
    setMessages
  }

  return (
    <ChatContext.Provider value={values}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)