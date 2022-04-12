import { useChat } from "../context/ChatContext"

function ChatList() {

  const { messages } = useChat();

  return (
    <div className="form-container">
      {
        messages.map((item, index) => {
          return (
            <div className="messageContainer" key={index}>
              <p>{item.message}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatList;