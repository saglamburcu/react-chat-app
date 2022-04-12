import { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";
import SocketIO from "socket.io-client";

const socket = SocketIO("http://localhost:3001", { transports: ["websocket"] });

function ChatForm() {
  const { setMessages } = useChat();
  const [text, setText] = useState("")

  const handleMessage = (e) => {
    e.preventDefault();

    socket.emit("send_data", {
      message: text
    })

    let item = { message: text, fromMe: true }
    setMessages((prevState) => [...prevState, item])
    setText("")
  }

  useEffect(() => {
    socket.on("push_data", (response) => {
      console.log(response.message)
      let item = { message: response.message, fromMe: true }
      setMessages((prevState) => [...prevState, item])
    })
  }, [])

  return (
    <form onSubmit={handleMessage}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message..." />
    </form>
  )
};

export default ChatForm;