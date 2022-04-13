import { useChat } from "../context/ChatContext";
import ScrollableFeed from 'react-scrollable-feed';

function ChatList() {

  const { messages } = useChat();

  return (
    <ScrollableFeed forceScroll={true} className="form-container">
      {
        messages.map((item, index) => {
          return (
            <div className={`messageContainer ${item.fromMe ? "right" : ""}`} key={index}>
              <div className="message">
                <p>{item.message}</p>
              </div>
            </div>
          )
        })
      }
    </ScrollableFeed>
  )
}

export default ChatList;